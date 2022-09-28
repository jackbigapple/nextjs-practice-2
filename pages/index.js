import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "01",
    title: "meet up title 1",
    image:
      "https://images.unsplash.com/photo-1664262283606-d4e198491656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2012&q=80",
    address:
      "7th Floor, No. 169 Zhongxiao East Road Section 4, Daan District, Taipei City 106",
    description:
      "To set a breakpoint, click on the blue dot next to a step. Replay your user flow, the replay will pause before executing the step. From here, you can continue the replay, execute a step, or cancel the replay 1r",
  },
  {
    id: "02",
    title: "meet up title 2",
    image:
      "https://images.unsplash.com/photo-1664262283606-d4e198491656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2012&q=80",
    address:
      "7th Floor, No. 169 Zhongxiao East Road Section 4, Daan District, Taipei City 106",
    description:
      "To set a breakpoint, click on the blue dot next to a step. Replay your user flow, the replay will pause before executing the step. From here, you can continue the replay, execute a step, or cancel the replay2 ",
  },
  {
    id: "03",
    title: "meet up title 3",
    image:
      "https://images.unsplash.com/photo-1664262283606-d4e198491656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2012&q=80",
    address:
      "7th Floor, No. 169 Zhongxiao East Road Section 4, Daan District, Taipei City 106",
    description:
      "To set a breakpoint, click on the blue dot next to a step. Replay your user flow, the replay will pause before executing the step. From here, you can continue the replay, execute a step, or cancel the replay3 ",
  },
  {
    id: "04",
    title: "meet up title 4",
    image:
      "https://images.unsplash.com/photo-1664262283606-d4e198491656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2012&q=80",
    address:
      "7th Floor, No. 169 Zhongxiao East Road Section 4, Daan District, Taipei City 106",
    description:
      "To set a breakpoint, click on the blue dot next to a step. Replay your user flow, the replay will pause before executing the step. From here, you can continue the replay, execute a step, or cancel the replay 4r",
  },
];

function HomePage() {
  const [loadedMeetups, setLoadedMeetup] = useState([]);

  //send http request and fetch data
  useEffect(() => {
    setLoadedMeetup(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
}


export default HomePage;
