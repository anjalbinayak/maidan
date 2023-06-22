import React from "react";

interface UserProfileProps {
  idx: string;
  name: string;
  email: string;
  image: string;
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    margin: "1rem",
    width: "300px",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  name: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "0.5rem 0",
  },
  email: {
    fontSize: "1rem",
    color: "#666",
  },
};

const UserProfile = ({
  idx,
  name,
  email,
  image,
}: UserProfileProps): JSX.Element => {
  return (
    <div style={styles.container}>
      <img style={styles.image} src={image} alt={name} />
      <div style={styles.name}>{name}</div>
      <div style={styles.email}>{email}</div>
    </div>
  );
};

export default UserProfile;
