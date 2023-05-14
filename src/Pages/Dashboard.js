import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "../Axios/axios";
import { TailSpin } from "react-loader-spinner";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
function Dashboard() {
  const [users, setUsers] = React.useState([]);
  const [find, setFind] = React.useState("");
  const navigate = useNavigate();
  React.useEffect(() => {
    fetchData();
  }, []);
  const search = () => {
    const regex = new RegExp(find, "gi");
    const id = users.filter((ele) => {
      return ele.Name.match(regex);
    });
    if (id[0]) {
      navigate("/performance", { state: { id: id[0].Roll_no } });
    } else {
      alert(`User ${find} Not Exist`);
    }
  };
  const fetchData = async () => {
    const res = await axios.get("/data");
    setUsers(res.data);
  };
  return (
    <>
      <TextField
        id="filled-search"
        label="Search your name..."
        variant="filled"
        sx={{
          marginTop: "1rem",
          width: "30%",
        }}
        onChange={(e) => {
          setFind(e.target.value);
        }}
        InputProps={{
          endAdornment: (
            <IconButton onClick={search}>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />

      {users.length ? (
        <div className="grid sm:grid-cols-4 gap-4 p-2 grid-cols-1">
          {users.map((user, index) => {
            return (
              <User
                name={user.Name}
                email={user.Email}
                id={user.Roll_no}
                mob={user.Mob}
                key={index}
                navigate={navigate}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
    </>
  );
}

function User({ name, email, id, mob, navigate }) {
  return (
    <div
      className="h-[8rem] w-[20rem] shadow-xl shadow-gray-500 border-[1px] border-red-400 flex box-border p-1 pl-2 flex-col rounded-lg cursor-pointer"
      onClick={() => {
        navigate("/performance", { state: { id: id } });
      }}
    >
      <span>
        User_id <span className="text-blue-600">{id}</span>
      </span>
      <span>
        User_name <span className="text-blue-600">{name}</span>
      </span>
      <span>
        Email <span className="text-blue-600">{email}</span>
      </span>
      <span>
        Contact <span className="text-blue-600">{mob}</span>
      </span>
    </div>
  );
}

export default Dashboard;
