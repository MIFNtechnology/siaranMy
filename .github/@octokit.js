import { createAppAuth } from "@octokit/auth-app";
const octokit = new Octokit({
  authStrategy: createAppAuth,
  auth: {
    appId: 1,
    privateKey: "-----BEGIN PRIVATE KEY-----\n...",
    installationId: 123,
  },
});

// authenticates as app based on request URLs
const {
  data: { slug },
} = await octokit.rest.apps.getAuthenticated();

// creates an installation access token as needed
// assumes that installationId 123 belongs to @octocat, otherwise the request will fail
await octokit.rest.issues.create({
  owner: "octocat",
  repo: "hello-world",
  title: "Hello world from " + slug,
});
