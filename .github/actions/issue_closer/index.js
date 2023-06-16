const core = require('@actions/core');
const github = require('@actions/github');

try {
  const number = github.context.payload.number;
  console.log(`The number is ${number}`);


  // const name = 'James';
  // console.log(`Hello ${name}!`);

  // const time = (new Date()).toTimeString();
  // core.setOutput("time", time);


  // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2)
  // console.log(`The event payload: ${payload}`);



  // const token = core.getInput('token');
  // const octokit = github.getOctokit(token)

  const octokit = github.getOctokit;

  const pullRequest = octokit.rest.pulls.get({
    owner: "fallwith",
    repo: "gha",
    pull_number: number,
  });

  console.log(`The PR: ${pullRequest}`);



} catch (error) {
  core.setFailed(error.message);
}
