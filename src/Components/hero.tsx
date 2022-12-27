import React, {useState} from "react";
import styled from "styled-components";

interface data {
  todo: string;
  id: number;
  staus: boolean;
  Describe: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
}

const Hero = () => {
  const [todovalue, setTodo] = React.useState("");
  const [data, setData] = React.useState<data[]>([]);
  const [newDate, setNewDate] = React.useState("")
  const [newDate2, setNewDate2] = React.useState("")
  const [newTime, setNewTime] = React.useState("")
  const [newTime2, setNewTime2] = useState("")

  //   created id
  let idData: number = data.length + 1;

  //   creating task
  const addNewTask = () => {
    // sorting algoritm
    const sortinfo = (x: any) => {
      return (a: any, b: any) => {
        if (a[x] < b[x]) {
          return a[x];
        } else if (a[x] > b[x]) {
          return -1;
        }
        return 0;
      };
    };

    // time
    const now = new Date();

    setDate(now.toDateString());
    let hr = now.getHours().toString();
    let min = now.getMinutes().toString();
    // let aporpm = now.toString();
    var aMorPm = hr >= "12" ? "pm" : "am";

    setTime(`${hr}:${min} ${aMorPm}`);

    

  // const [myTime, setMyTime] = useState()

    // get all data
    setData((prev) =>
      [
        ...prev,
        {
          staus: false,
          todo: todovalue,
          id: idData,
          Describe: des,
          startTime: newTime,
          endTime: newTime2,
          startDate: newDate,
          endDate: newDate2
        },
      ].sort(sortinfo("id"))
    );
  };

  // start and end
  const [start, setStart] = React.useState("");
  const [end, setEnd] = React.useState("");

  // date
  const [date, setDate] = React.useState<any>();
  // tieme
  const [time, setTime] = React.useState<any>();

  //   delete task;
  const deleteTask = (id: number) => {
    let deleteData = data.filter((e) => e.id !== id);
    setData(deleteData);
  };

  // desctiption
  const [des, setdes] = React.useState("");

  //   edit
  const [edit, setedit] = React.useState(-1);
  // boolean operator
  const [falses, setfalses] = React.useState(false);
  // switch edit and update button
  const changeButton = () => {
    setfalses(!falses);
  };

  // capture edit input
  const [input, setinput] = React.useState("");

  const updateButton = () => {
    setfalses(!true);
    data[0].todo = input;
  };

  const editdata = (id: number) => {
    setedit(id);
  };

  // done
  const [done, setDone] = React.useState(false);
  const changeDoneState = () => {
    setDone(false);
    data[0].staus = true;
    alert("TASK COMPLETED!! You can delete the task now. Thank you for using Task Tracker")
  };

  const localData = JSON.parse(
    window.localStorage.getItem
    ("names") || "" )

  const [changeBG, setChangeBG] = React.useState(false)

  const bgClick = () => {
      setChangeBG(current => !current)
    }

  return (
    <Container>
      <h2>Welcome {localData.toUpperCase()}</h2>
      <span>CREATE TODAY'S TASK</span>

       {/* title */}
       <Input
        placeholder="Enter your task"
        onChange={(e: any) => {
          setTodo(e.target.value);
        }}
      />

      {/* description */}
      {todovalue !== "" ? (
        <Textarea
          onChange={(e:any) => {
            setdes(e.target.value);
          }}
          placeholder="Description (brief)"
        />
      ) : null}

      {/* my Date & Time */}
      <TaskDate>
                {/* <DateInput 
                  onChange={((e: any) => {
                    setNewDate(e.target.value)
                  })}  
                  type="date" name="" id="" /> */}

                <TaskTime>
                    <Start style={{marginRight:"10px"}}>
                      Start-Task  <input 
                        onChange={((e) => {
                          setNewTime(e.target.value)
                        })} 
                        type="time" name="" id="" />
                        <br/>
                    <DateInput 
                      onChange={((e: any) => {
                        setNewDate(e.target.value)
                      })}  
                      type="date" name="" id="" />
                    </Start>

                    <Start style={{marginLeft:"10px"}}>
                      End-Task  <input 
                        onChange={((e) => {
                          setNewTime2(e.target.value)
                        })} 
                         type="time" name="" id="" />
                         <br/>
                     <DateInput 
                       onChange={((e: any) => {
                         setNewDate2(e.target.value)
                       })}  
                       type="date" name="" id="" />
                    </Start>
                </TaskTime>
             </TaskDate>

      {/* start and finish */}
      {/* <StartAndFinish>
        <Hold style={{marginRight:"10px"}}>
          <Start>Start-Task</Start>
          <SeleteDate
            onChange={(e:any) => {
              setStart(e.target.value);
            }}
            type={"date"}
          />
        </Hold>
        <Hold style={{marginLeft:"10px"}}>
          <End>End-Task</End>
          <SeleteDate
            onChange={(e:any) => {
              setEnd(e.target.value);
            }}
            type={"date"}
          />
        </Hold>
      </StartAndFinish> */}

      {todovalue && newTime && newDate && newTime2 && newDate2!== "" ? (
        <Submit cursor="value" onClick={addNewTask} bg="black">
          Submit
        </Submit>
      ) : (
        <Submit cursor="" bg="silver">
          Submit
        </Submit>
      )}
      <br />
      <br />
      <h3>All Tasks</h3>
      {data.map((data) => (
        <Card>
          <Title>
            {/* <i>Title :</i>  */}
            {data.todo}
          </Title>

          <Dis>
            {/* <i>Description:</i>  */}
            {data.Describe}
          </Dis>


          {/* <Time>This Task Was Created on {date}</Time>
          // <Time>By {time}</Time> */}
          {/* // <Start>
          //   <i>Start-Task:</i> {data.start}
          // </Start>
          // <End>
          //   {" "}
          //   <i>End-Task:</i> {data.end}
          // </End> */}

              <TasksDate>

                <Start style={{marginRight:"20px"}}>
                  START-TASK:
                  <p style={{marginTop:"8px"}}>{data.startDate}  </p>

                  <p style={{marginTop:"-15px"}}>{data.startTime}  </p> 
                  
                </Start>

                <Start>
                  END-TASK: 
                  <p style={{marginTop:"8px"}}>{data.endDate}  </p> 

                  <p style={{marginTop:"-15px"}}>{data.endTime}  </p>  
                </Start>
                
             </TasksDate>


          {/* edit */}
          {data.id == edit && falses ? (
            <input
              onChange={(e) => {
                setinput(e.target.value);
              }}
              onClick={() => {
                editdata(data.id);
              }}
              defaultValue={data.todo}
            />
          ) : null}
          <Wrap>
            {data.id == edit && falses ? (
              <Button
                onClick={() => {
                  updateButton();
                  editdata(data.id);
                }}
                bg="value"
              >
                Update
              </Button>
            ) : (
              <Button
                onClick={() => {
                  changeButton();
                  editdata(data.id);
                }}
                bg=""
              >
                Edit
              </Button>
            )}
            <Button
              style={{backgroundColor: changeBG ? "#1db61d" : "", color: changeBG ?"gray" : "", borderRadius:"3px", border:"none"
              }}
              onClick={() => {
                changeDoneState();
                editdata(data.id);
              }}
              bg=""
            >
              Done
            </Button>
            <Button
              bg=""
              onClick={() => {
                deleteTask(data.id);
              }}
            >
              Delete
            </Button>
          </Wrap>

          {data.id === edit && done ? (
            <p style={{fontWeight:"600", fontSize:"14px"}}>This Task has been completed.</p>
          ) : null}

          {/* {data.id === edit && done ? (
            <Done dn="flex">
              <pre>
                This task as <br /> been done
              </pre>
              <br />
              {"👇"} <p>{data.todo}</p>
              {"✔"}
            </Done>
          ) : (
            <Done dn="">
              <pre>
                This task as <br /> been done
              </pre>
              <br />
              {"👇"} <p>{data.todo}</p>
              {"✔"}
            </Done>
          )} */}

        </Card>
      ))}
    </Container>
  );
};

export default Hero;

const DateHold1 = styled.div`
font-weight: 600;
font-size: 14px;
display: flex;
flex-direction: column;
margin-right: 25px;
/* align-items: center;
justify-content: center; */
`;

const DateHold = styled.div`
font-weight: 600;
font-size: 14px;
display: flex;
margin-right: 7px;
align-items: center;
justify-content: center;
`;

const TasksDate = styled.div`
/*  width: 70%; */
display: flex;
margin-top: 10px;
/* justify-content: space-around; */
/* align-items: center; */
// justify-content: space-between;
`;

const DateInput = styled.input`
width: 100px;
height: 27px;
padding-left: 5px;
padding-right: 5px;
`;

// const Start = styled.div`
// font-weight: 600;
// font-size: 14px;

// input{
//   height: 25px;
// }
// `;

const TaskTime = styled.div`
display: flex;
/* justify-content: space-between; */
align-items: center;
margin-top: 5px;
`;

const TaskDate = styled.div`
width: 220px;
display: flex;
flex-direction: column;
margin-top: 15px;
align-items: center;
justify-content: center;
`;

const Hold = styled.div``;

const Start = styled.pre`
  /* font-size: 18px; */
  margin: 0;
  text-transform: capitalize;
  /* width: 80%; */
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 14px;
  
 input{
   height: 25px;
 }
`;
const End = styled.pre`
  margin: 0;
  /* font-size: 18px; */
  width: 86%;
  font-weight: 600;
  /* @media screen and (max-width: 500px) {
    font-size: 15px;
    width: 65%;
  } */
  text-transform: capitalize;
  margin-bottom: 8px;
`;
const Span = styled.span``;

const StartAndFinish = styled.div`
margin-top: 15px;
  display: flex;
`;

const SeleteDate = styled.input`
  margin-bottom: 10px;
  width: 100px;
  height: 30px;
  padding-left: 10px;
  /* font-size: 20px; */
  /* @media screen and (max-width: 500px) {
    font-size: 15px;
    padding-left: 10px;
  } */
`;

const Textarea = styled.textarea`
  margin-top: 20px;
  width: 300px;
  height: 50px;
  resize: none;
  border: 0;
  padding-left: 10px;
  padding-top: 10px;
  outline: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  @media screen and (max-width: 500px) {
    width: 200px;
  }
`;

const Dis = styled.div`
  width: 250px;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 10px;
  @media screen and (max-width: 500px) {
    font-size: 15px;
    width: 60%;
  }
`;

const Card = styled.div`
width: 260px;
background-color: white;
display: flex;
align-items: left;
flex-direction: column;
text-align: left;
padding: 30px;
border-radius: 5px;
margin: 5px;
  /* margin: 10px;
  padding-bottom: 20px;
  background-color: white; */
box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;

  /* @media screen and (max-width: 500px) {
    font-size: 15px;
    padding: 0;
    width: 300px;
    padding-bottom: 20px;
    padding-top: 20px;
    flex-wrap: wrap;
  } */

  /* i {
    color: green;
    font-weight: bold;
    font-size: 20px;
    @media screen and (max-width: 500px) {
      font-size: 15px;
    } */
  /* }
  input {
    @media screen and (max-width: 500px) {
      width: 60%;
    }
    width: 76%;
    height: 30px;
    margin-top: 20px;
    padding-left: 10px;
  } */
  position: relative;
`;
const Done = styled.div<{ dn: string }>`
  backdrop-filter: blur(6px);
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-wrap: wrap;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  pre {
    margin-right: 8px;
    margin: 0;
  }
  p {
    color: green;
    width: 300px;
    margin: 0;
  }
`;
const Title = styled.div`
  width: 250px;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 600;
  
  /* @media screen and (max-width: 500px) {
    font-size: 15px;
    width: 60%;
  } */
`;
const Time = styled.div`
  font-weight: 500;
  width: 80%;
  font-size: 18px;
  margin-bottom: 10px;
  @media screen and (max-width: 500px) {
    font-size: 15px;
    width: 60%;
  }
`;
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const Button = styled.button<{ bg: string }>`
//   /* background-color: ${({ bg }) => (bg: any ? "red" : "")}; */
//   margin-right: 10px;
//   padding: 8px 30px;
//   margin-top: 20px;
//   text-transform: capitalize;
//   font-weight: 500;
//   cursor: pointer;
//   @media screen and (max-width: 500px) {
//     font-size: 14px;
//     padding: 8px 10px;
//   }
// `;

const Button = styled.button<{ bg: string }>`
  margin-right: 12px;
  height: 30px;
  width: 90px;
  cursor: pointer;
  border: none;
  background-color: #1db61d;
  border-radius: 3px;
  color: white;
  font-weight: 600;
   margin-top: 20px;
`;

const Submit = styled.button<{ bg: string; cusor: string }>`
  height: 45px;
  width: 320px;
  margin-top: 20px;
  border: none;
  outline: none;
  border-radius: 20px;
  font-weight: 600;
  color: white;
  /* font-size: 19px; */
  background-color: ${(bg:any) => bg.bg};
  transition: 360ms;
  cursor: pointer;
  text-align: center;
  
  /* @media screen and (max-width: 500px) {
    padding: 17px 90px;
  } */
  :hover {
    transform: scale(0.9);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  nav {
    width: 300px;
    text-align: center;
    font-size: 11px;
    text-transform: lowercase;
    a {
      margin-right: 4px;
      margin-left: 4px;
    }
    @media screen and (max-width: 500px) {
      width: 250px;
    }
  }
  h2 {
    font-size: 20px;
    text-transform: capitalize;
    @media screen and (max-width: 500px) {
      font-size: 17px;
    }
  }
  h3 {
    text-transform: capitalize;
      font-size: 17px;
      background-color: black;
      color: white;
      width: 90px;
      height: 35px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  span {
    font-weight: 500;
    font-size: 17px;
    margin-bottom: 20px;
    text-transform: capitalize;
  }
`;

const Input = styled.input`
  border: none;
  outline: 0;
  width: 300px;
  height:40px;
  border: none;
  padding-left: 10px;
  border-radius: 5px;
  outline-color: #dcd9f8;
  box-shadow: 0 0 2px gray;

  /* @media screen and (max-width: 500px) {
    width: 200px;
  } */
  /* ::placeholder {
    font-size: 18px;
    font-weight: 500;
  } */
`;