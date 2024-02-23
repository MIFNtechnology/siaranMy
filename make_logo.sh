#!/usr/bin/env bash

curl -sS https://raw.githubusercontent.com/MIFNtechnology/siaranMy/main/usr/share/siaranMy/logo/channels.logo -o ./logo/channels.logo
echo "FO:Faroe Islands" >> ./logo/channels.logo

for channel in `cat ./logo_order.txt | grep -v "^$" | grep -v "#"`; do
    channel_name=`echo "$channel"|sed -e "s/_/ /g"`

    [[ "$channel_name" == "Tv1" ]] && channel_name="Tv1.png"
    [[ "$channel_name" == "Tv2" ]] && channel_name="Tv2.png"

    channel_code_line=`cat ./logo/channels.logo|grep -m 1 -i "$channel_name"`

    if [[ -z "$channel_code_line" ]]; then
        echo "MISSING CHANNEL CODE FOR: $channel"
        exit 1
    elif [[ -n "$channel_code_line" ]]; then
        IFS=':'; channel_code_arr=($channel_code_line); unset IFS
        channel_code="${channel_code_arr[0],,}"
    fi

    echo "[<img src=\"https://mifntechnology.github.io/siaranMy/logo/logos/$channel_name.svg\" width=\"40\">](logo/$channel.png)"
done

rm ./logo/channels.logo
