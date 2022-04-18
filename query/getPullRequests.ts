import { response } from "express";
import fetch, { Response } from "node-fetch";

const headers = {
  'Accept': 'application/vnd.github.v3+json',
  'Authorization': `${process.env.MY_TOKEN}`,
};

export const getPulls = async (owner:string,repo:string): Promise<unknown> => {
  return fetch(`https://api.github.com/repos/${owner}/${repo}/pulls`, {
    headers,
  })

  .then((res:Response) => {
    if(res.ok){
    return res.json()
    }
    else{
      return  Promise.reject(new Error(`Http Error: ${res.status} Either there are no open PRs or your params are wrong please try again`))
    }
  })
  .then(openPullArray => {

const fetchCommits = async (url: string): Promise<unknown> => {
   const response = await fetch(url)
   const commitArray  = await response.json()
   return commitArray.length
}
const findAllTheCommits = async () => {
  try {
     return Promise.all(
         openPullArray.reverse().map(async (repos:any,index:number) => {
            const item = await fetchCommits(repos['commits_url'])
            const pullObject = {id: ++index,
              number: repos['number'],
              title: repos['title'],
              author: repos['user']['login'],
              commit_count: item
            }
            return pullObject
          })
        )
  } catch (error) {
    console.log(error)
  }
}
 const formattedResponse = findAllTheCommits()

    return formattedResponse
    })
    .catch()

};
