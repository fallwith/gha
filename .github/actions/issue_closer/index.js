const core = require('@actions/core');
const github = require('@actions/github');

const DEFAULT_BRANCH = 'dev';
const COMMENT_COUNT = 100;

try {
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);

  const payload = github.context.payload;

  const number = payload.number;
  console.log(`The PR number is ${number}`);

  const base = payload.pull_request.base;

  const ref = base.ref;
  console.log(`The PR ref is ${ref}`);

  const fullName = base.repo.full_name;
  console.log(`The repo full name is ${fullName}`);

  if (ref == DEFAULT_BRANCH) {
    console.log(`PR ${number} targeted branch ${ref}. Exiting.`);
    return
  }

  const repoElements = fullName.split('/');
  const owner = repoElements[0];
  const repo = repoElements[1];
  console.log(`PR repo owner = ${owner}, repo = ${repo}`);

  query = `query { 
    repository(owner: "${owner}", name: "${repo}") {
      pullRequest(number: ${number}) {
        comments(last: ${COMMENT_COUNT}) {
          edges {
            node {
              bodyText
            }
          }
        },
        baseRefName,
        body
      }
    }
  }`

  const octokit = github.getOctokit;
  const results = octokit.graphql(query);

  console.log(`results = ${results}`);
} catch (error) {
  core.setFailed(error.message);
}
