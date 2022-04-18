import express from 'express';
import { getPulls } from '../query/getPullRequests';

const router = express.Router();

router.get('/:owner/:repo', (request, response, next) => {
  const { owner, repo } = request.params;

  return getPulls(owner, repo)
    .then(repository => response.json(repository))
    .catch(next);
});


export default router;