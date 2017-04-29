import axios from 'axios';

// in case of denying of permission it may be just github staff, so you need in id and secret_id
// const id = 'YOUR_ID';
// const sec = 'YOUR_SECRET_ID';
// add it to querry
// const params = `?client_id=${id}&client_secret=${sec}`;

const getProfile = (userName) => {
  return axios.get(`https://api.github.com/users/${userName}`)
    .then((user) => {
      console.log('user.data: ', user.data);
      return user.data;
    });
};

// getProfile('dfdf');

const getRepos = (userName) => {
  return axios.get(`https://api.github.com/users/${userName}/repos?&per_page=100`);

    // .then((repos) => {
    //   // console.info('initial repos: ', repos.data);
    //   return repos.data;
    // });
};

// getRepos('UHanczar');

const getStarCount = (repos) => {
  console.log('getCount repos: ', repos);
  return repos.data.reduce((count, repo) => {
    // console.log('r: ', repo, count);
    return count + repo.stargazers_count;
  }, 0);

  // return repos.then((data) => {
  //   console.log('r: ', data);
  //   return data.reduce((count, repo) => {
  //     return count + repo.stargazers_count;
  //   }, 0);
  // });
};

// getStarCount(getRepos('UHanczar'));

const calculateScore = (profile, repos) => {
  const followers = profile.followers;
  const totalStars = getStarCount(repos);
  // console.log('profile: ', profile, 'totalStars: ', totalStars);
  return (followers * 3) + totalStars;
};

// calculateScore(getProfile('UHanczar'), getRepos('UHanczar'));

const handleError = (error) => {
  console.warn(error);
  return null;
};

const getUserData = (player) => {
  return axios.all([
    getProfile(player),
    getRepos(player)
  ])
  .then((data) => {
    const profile = data[0];
    const repos = data[1];
    console.log(profile);
    return {
      profile: profile,
      score: calculateScore(profile, repos)
    };
  });
};

// getUserData('UHanczar');

const sortPlayers = (players) => {
  return players.sort((a, b) => {
    return b.score - a.score;
  });
};

const battle = (players) => {
  return axios.all(players.map(getUserData)).then(sortPlayers).catch(handleError);
};

// battle(['UHanczar', 'dfdf']).then((data) => {
//   const winner = data[0].profile.login;
//   console.info('winner: ', winner);
// });

const fetchPopularRepos = (language) => {
  const encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories');

  return axios.get(encodedURI).then((response) => {
    return response.data.items;
  });
};

export default {
  battle,
  fetchPopularRepos
};
