import type { User, Connection } from "@utils/types";
import { getConnections } from "api/api";
import {
  Button,
  Loading,
  Input,
  Avatar,
} from "mee-components/react-components";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Connections({ user }: { user: User }) {
  let navigate = useNavigate();
  const [profileOpened, setProfileOpened] = useState(false);
  const [connections, setConnections] = useState<Connection[]>();
  const name = `${user.name.first} ${user.name.last}`;
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const loadData = useCallback(async () => {
    const connections = await getConnections();
    setConnections(connections);
  }, []);

  useEffect(() => {
    loadData();
    document.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      if (!target.closest("#profile-modal") && profileOpened) {
        setProfileOpened(false);
      }
    });
  }, [loadData]);

  const clickConnection = (id?: number) => {
    if (id !== undefined) {
      navigate("/" + id);
    } else {
      navigate("/create");
    }
  };

  return (
    <main className="flex h-full min-h-screen p-6">
      <article className="flex h-full w-full max-w-480 flex-1 flex-col items-start justify-start gap-6">
        <div className="flex w-full flex-col flex-wrap items-center justify-between gap-6 text-base font-semibold lg:flex-row">
          <div className="order-2 flex flex-wrap items-center gap-4 self-start lg:order-none">
            <Input
              id="search"
              label="Search apps"
              className="!w-80"
              labelPosition="inside"
              autocomplete="off"
              leftIcon="search"
              required
            />
            <div>
              <Button
                id="filter"
                type="button"
                buttonType="primary"
                style="outlined"
                size="l"
                className="w-64"
              >
                Filter
              </Button>
            </div>
          </div>
          <div className="order-1 float-right flex w-full flex-shrink-0 flex-row justify-between gap-4 lg:order-none lg:w-auto">
            <div className="">
              <Button
                id="add-connection"
                type="button"
                className="w-auto px-4"
                leftIcon="plus-lg text-xl"
                onClick={() => clickConnection()}
              >
                <span className="hidden sm:block">Add connection</span>
              </Button>
            </div>
            <div
              id="profile"
              className="self-end"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setProfileOpened(!profileOpened);
              }}
            >
              <div className="flex h-11 flex-row items-center rounded-xl border border-solid border-gray-300 bg-gray-50 p-0">
                <div className="flex h-full flex-row items-center justify-center gap-4 border-r border-solid border-gray-300 px-4">
                  <Avatar
                    size="sm"
                    id="profile-image-preview"
                    isActive={true}
                    iconUrl={user.picture.medium}
                    initials={initials}
                  />
                  <p>Profile</p>
                </div>
                <div
                  className="flex h-full cursor-pointer flex-row items-center justify-center px-4 transition-all data-[active]:rotate-180"
                  id="open-profile-modal"
                >
                  <i className="bi bi-chevron-down text-2xl"></i>
                </div>
              </div>
            </div>
          </div>
          {profileOpened && (
            <div
              className="absolute right-4 top-20 z-100 flex-col items-start rounded-lg border border-solid border-brand-300 bg-white p-0 shadow-2"
              id="profile-modal"
            >
              <div className="flex flex-col items-center gap-4 rounded-t-lg border-b border-brand-300 bg-brand-50 px-6 py-8">
                <div className="flex flex-col items-center gap-2 p-0">
                  <Avatar
                    size="xl"
                    id="profile-image"
                    isActive={true}
                    iconUrl={user.picture.medium}
                    initials={initials}
                  />
                  <div className="flex flex-col items-center p-0">
                    <p className="text-center text-sm leading-5 tracking-0.02 text-gray-700">
                      Current profile
                    </p>
                    <p className="text-center text-xl font-semibold tracking-0.02 text-gray-900">
                      {user.email}
                    </p>
                  </div>
                </div>
                <div>
                  <Button
                    id="edit-profile"
                    type="button"
                    buttonType="primary"
                    style="outlined"
                  >
                    Edit profile
                  </Button>
                </div>
              </div>
              <div className="w-full border-b border-gray-300 text-gray-800">
                <div className="flex h-14 cursor-pointer flex-row items-center gap-2 px-6 py-4 hover:bg-gray-100">
                  <div>
                    <i className="bi bi-gear text-xl"></i>
                  </div>
                  Settings
                </div>
                <div className="flex h-14 cursor-pointer flex-row items-center gap-2 px-6 py-4 hover:bg-gray-100">
                  <div>
                    <i className="bi bi-send text-xl"></i>
                  </div>
                  Send Feedback
                </div>
              </div>
              <div className="w-full border-b-gray-300 text-gray-800">
                <div className="flex h-14 cursor-pointer flex-row items-center gap-2 rounded-b-lg px-6 py-4 hover:bg-gray-100">
                  <div>
                    <i className="bi bi-box-arrow-left text-xl"></i>
                  </div>
                  Sign out
                </div>
              </div>
            </div>
          )}
        </div>
        {connections ? (
          <section
            className="flex w-full flex-col items-start rounded-xl border border-solid border-gray-300 bg-white text-gray-800"
            id="connections-container"
          >
            {connections.map((connection, i) => (
              <div
                key={i}
                className="flex w-full cursor-pointer flex-row items-center justify-between gap-6 border-b border-solid border-b-grey-200 p-6 last:border-b-0"
                onClick={() => clickConnection(i)}
              >
                <div className="flex items-center gap-6">
                  <img
                    src={connection.image_url || "/images/empty-logo.png"}
                    className="isolate flex h-16 w-16 flex-col items-center justify-center rounded-none p-0"
                  ></img>
                  <div className="text-base font-semibold md:text-xl md:tracking-0.02">
                    {connection.name}
                  </div>
                </div>
                <div className="flex items-end gap-4">
                  <button>
                    <div className="flex rotate-90" id="arrow-right">
                      <div className="flex rotate-180">
                        <i className="bi bi-chevron-down text-2xl"></i>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </section>
        ) : (
          <Loading />
        )}
      </article>
    </main>
  );
}
