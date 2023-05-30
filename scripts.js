const githubProfileUrl = "https://github.com/RecoFu";
const linkedInProfileUrl = "https://www.linkedin.com/in/recofu/";

// Fetch and display GitHub profile
fetch(githubProfileUrl)
  .then(response => response.json())
  .then(data => {
    const githubContent = document.getElementById("github-content");
    githubContent.innerHTML = `
      <h3>${data.name}</h3>
      <p>Username: ${data.login}</p>
      <p>Public Repos: ${data.public_repos}</p>
      <p>Followers: ${data.followers}</p>
      <p>Following: ${data.following}</p>
      <a href="${data.html_url}" target="_blank">View GitHub Profile</a>
    `;
  });

// Display LinkedIn profile (requires server-side implementation)
const linkedInContent = document.getElementById("linkedin-content");
linkedInContent.innerHTML = `
  <p>LinkedIn profile integration requires server-side implementation due to LinkedIn API restrictions. Please refer to the <a href="https://www.linkedin.com/developers/" target="_blank">LinkedIn Developers</a> documentation for more information.</p>
  <a href="${linkedInProfileUrl}" target="_blank">View LinkedIn Profile</a>
`;
