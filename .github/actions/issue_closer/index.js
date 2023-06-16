const core = require('@actions/core');
const github = require('@actions/github');

try {
  payload = github.context.payload;

  const number = payload.number;
  console.log(`The number is ${number}`);

  const base = payload.pull_request.base;

  const ref = base.ref;
  console.log(`The ref is ${ref}`);

  const fullName = base.repo.full_name;
  console.log(`The full name is ${fullName}`);



  // owner, name come from fullName (split on ':')

  // query { 
  //   repository(owner: owner, name: name) {
  //     pullRequest(number: 8) {
  //       comments(last: 100) {
  //         edges {
  //           node {
  //             bodyText
  //           }
  //         }
  //       },
  //       baseRefName,
  //       body
  //     }
  //   }
  // }











  // const name = 'James';
  // console.log(`Hello ${name}!`);

  // const time = (new Date()).toTimeString();
  // core.setOutput("time", time);


  // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2)
  // console.log(`The event payload: ${payload}`);



  // const token = core.getInput('token');
  // const octokit = github.getOctokit(token)

  // const octokit = github.getOctokit;

  // const pullRequest = octokit.rest.pulls.get({
  //   owner: "fallwith",
  //   repo: "gha",
  //   pull_number: number,
  // });

  // console.log(`The PR: ${pullRequest}`);



} catch (error) {
  core.setFailed(error.message);
}
