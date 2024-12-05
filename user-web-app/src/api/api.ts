import {
    object,
    type,
    string,
    boolean,
    optional,
    array,
    assert,
    type Describe,
  } from "superstruct";
  import type { User, Connection } from "@utils/types";
  
  const User: Describe<User> = type({
    gender: string(),
    email: string(),
    name: object({ title: string(), first: string(), last: string() }),
    picture: object({ large: string(), medium: string(), thumbnail: string() }),
  });
  
  const Connection: Describe<Connection> = type({
    name: string(),
    image_url: optional(string()),
    enabled: boolean(),
    details: optional(
      object({
        first_name: string(),
        second_name: string(),
        email: string(),
      }),
    ),
  });
  
  const Connections: Describe<Connection[]> = array(Connection);
  
  export const getUser = async () => {
    const responseUser = await fetch("https://randomuser.me/api");
    const dataUser = await responseUser.json();
    const randomUser = dataUser.results[0];
    assert(randomUser, User);
    return randomUser;
  };
  export const getConnections = async () => {
    const response = await fetch("/demo/connections.json");
    const data = await response.json();
    assert(data, Connections);
    return data;
  };
  export const getConnection = async (id: number) => {
    const response = await fetch("/demo/connections.json");
    const data = await response.json();
    assert(data, Connections);
    return data[id];
  };
  