import React, { useState, useContext, useEffect } from "react";
// import axios from "axios";
import { Input } from "../../../styles/inputs";
import { SearchForm } from "../style";
import Context from "lib/Context";

const SearchBar = () => {
  const { data, setData } = useContext(Context);

  const [list, setList] = useState(data);
  // const [list, setList] = useState([]]); NOTE- use with API
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);

  // const [loading, setLoading] = useState(false);

  const searchAction = (e) => {
    const { value } = e.target;
    setSearch(value);
    const results = list.filter((res) => {
      return res.name.toLowerCase().includes(search.trim().toLocaleLowerCase());
    });
    setFilterData(results);
    setData(results);
  };

  // useEffect(()=> {
  //   const timer = setTimeout(()=> {

  //   },4000)

  //   return
  // })

  // NOTE:- Commented code for API
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       setLoading(true);
  //       const data = await axios.get("https://restcountries.eu/rest/v2/all");
  //       const res = data.data;
  //       setList(res);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   }
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const results = list.filter((res) => {
  //     return res.name.toLowerCase().includes(search.trim().toLocaleLowerCase());
  //   });
  //   setFilterData(results);
  // }, [search, list]); //[search, list]

  return (
    <>
      <SearchForm inline className="position-relative">
        <Input
          type="text"
          placeholder="Search"
          className="mb-0 border-0"
          value={search.trim()}
          onChange={searchAction}
        />
      </SearchForm>
      {/* {filterData.map((user, idx) => {
        return <CountryDetail key={idx} {...user} />;
      })} */}
    </>
  );
};

export default SearchBar;

// const CountryDetail = (props) => {
//   const { name, flag } = props;

//   return (
//     <>
//       {/* <p>
//         <img src={flag} alt={name} style={{ width: "20px", height: "20px" }} />
//       </p> */}
//       <p>{name}</p>
//     </>
//   );
// };
