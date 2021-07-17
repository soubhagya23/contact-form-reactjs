import React from "react";
import GitHubButton from "react-github-btn";

export default function FollowMe() {
  return (
    <center style={{display: 'flex', justifyContent: 'center', columnGap:'10px'}}>
      <GitHubButton
        href="https://github.com/soubhagya23/contact-form-reactjs"
        data-color-scheme="no-preference: light; light: light; dark: dark;"
        data-icon="octicon-star"
        data-size="large"
        aria-label="Star soubhagya23/contact-form-reactjs on GitHub"
      >
        Star
      </GitHubButton>
     
     
      <GitHubButton
        href="https://github.com/soubhagya23"
        data-color-scheme="no-preference: light; light: light; dark: dark;"
        data-size="large"
        aria-label="Follow @soubhagya23 on GitHub"
      >
        Follow @soubhagya23
      </GitHubButton>
    </center>
  );
}
