import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ProfileSearchForm from "./ProfileSearchForm.component";

const BASE_URL = "https://api.github.com/users";

export default function ProfileViewerWithSearch() {
  const [username, setUsername] = useState("colt");
  const [profile, setProfile] = useState({ data: null, isLoading: true });

  useEffect(
    function fetchUserOnUsernameChange() {
      async function fetchUser() {
        const userResult = await axios.get(`${BASE_URL}/${username}`);
        setProfile({ data: userResult.data, isLoading: false });
      }
      fetchUser();
    },
    [username]
  );

  function search(username) {
    setProfile({ data: null, isLoading: true });
    setUsername(username);
  }

  if (profile.isLoading) return <i>Loading..</i>;

  return (
    <div >
      <ProfileSearchForm searches={search} />
      <b >{profile.data.name}</b>
      <img src={profile.data.avatar_url}></img>
    </div>
  );
}
