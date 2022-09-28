import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
}

//https://ithelp.ithome.com.tw/m/articles/10269586
export async function getStaticPaths() {
  const client = await MongoClient.connect("mongodb+srv://...............");
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: true, //path是否為
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data from an API

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect("mongodb+srv://...............");
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection
    .findOne({ _id: ObjectId(meetupId) })
    .toArray();

  client.close();
  return {
    props: {
      meetupData: {
        image: selectedMeetup.image,
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
    revalidate: 10, //在Server端多久會 regenerate
  };
}

export default MeetupDetails;
