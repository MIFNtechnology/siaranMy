#!/usr/bin/env bash

curl -sS https://raw.githubusercontent.com/MIFNtechnology/siaranMy/main/usr/share/siaranMy/logo/logo_name.png -o ./logo/logo_name.png
echo "FO:Faroe Islands" >> ./logo/logo_name.png

for channel in 'cmd</logo/logo_name.png | grep -v "^$" | grep -v ".png"`; do
    logo_name.png=`echo "$logo"|sed -e "s/_/ /g"`

    [[ "$logo_name" == "Tv1" ]] && logo_name="Tv1.png"
    [[ "$logo_name" == "Tv2" ]] && logo_name="Tv2.png"

    logo_name.png=`cmd< /logo/logo_name.png|grep -m 1 -i "$logo_name.png"`

    if [[ -z "$logo_name.png" ]]; then
        echo "MISSING LOGO NAME FOR: $logo"
        exit 1
    elif [[ -n "$logo_name.png" ]]; then
        IFS=':'; logo_name_arr=($logo_name.png); unset IFS
        logo_name="$logo_name_arr[0],,"
    fi

    echo "[<img src=\"https://mifntechnology.github.io/siaranMy/logo/logos/$logo_name.svg\" width=\"40\">](logo/$channel.png)"
done

rm ./logo/channels.logo
