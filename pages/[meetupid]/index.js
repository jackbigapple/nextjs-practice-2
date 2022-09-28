import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://images.unsplash.com/photo-1664262283606-d4e198491656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2012&q=80"
      title="meet up title 4"
      address="7th Floor, No. 169 Zhongxiao East Road Section 4, Daan District, Taipei City 106"
      description="To set a breakpoint, click on the blue dot next to a step. Replay your user flow, the replay will pause before executing the step. From here, you can continue the replay, execute a step, or cancel the replay 4r"
    />
  );
}

//https://ithelp.ithome.com.tw/m/articles/10269586
export async function getStaticPaths() {
    return {
        fallback: true, //path是否為
        paths:[
            {
                params:{
                    meetupId: 'a01',
                }
            },
            {
                params:{
                    meetupId: 'a01',
                }
            }
        ]
    }

}

export async function getStaticProps(context) {
    // fetch data from an API

    const meetupId = context.params.meetupId;

    console.log(meetupId);

    return {
      props: {
        meetupData:{
            image:"https://images.unsplash.com/photo-1664262283606-d4e198491656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2012&q=80",
            title:"meet up title 4",
            address:"7th Floor, No. 169 Zhongxiao East Road Section 4, Daan District, Taipei City 106",
            description:"To set a breakpoint, click on the blue dot next to a step. Replay your user flow, the replay will pause before executing the step. From here, you can continue the replay, execute a step, or cancel the replay 4r",   
        }
      },
      revalidate: 10  //在Server端多久會 regenerate
    };
  }

export default MeetupDetails;
