import React, { useCallback, useEffect, useRef, useState } from "react";
import { Table } from "reactstrap";
import "./Table.css";
import Data from "../Data";
import nirf from "../assets/NIRF.png";
import olook from "../assets/olook.jpeg";
import { MdCompareArrows } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { FaCheck } from "react-icons/fa6";
import { RiArrowDownSLine } from "react-icons/ri";
const data1 = Data.slice(0, 4);
const DataTable = () => {
  const [getData, setGetData] = useState([]);
  const [boole1, setboole1] = useState(false);
  const [page, setpage] = useState(4);
  const [loading, setloading] = useState(false);
  const [sortedArray, setsortedArray] = useState([]);
  const [fees, setfees] = useState(false);
  const [pack, setpack] = useState(false);
  const [rev, setrev] = useState(false);

  const [Sort, setSort] = useState({
    keyToSort: "CD Rank",
    direction: "asc",
  });
  const loadref = useRef(null);

  useEffect(() => {
    setGetData(data1);
    setsortedArray(data1);
  }, []);
  useEffect(() => {}, [getData]);
  const getJsonData = useCallback(() => {
    if (loading) return;
    setloading(true);
    const data2 =
      page === 8 ? Data.slice(page, page + 3) : Data.slice(page, page + 2);

    setGetData((previous) => [...previous, ...data2]);

    setTimeout(() => {
      setloading(false);
    }, 1000);
    setsortedArray((get) => [...get, ...data2]);

    if (page === 8 || page < 8) {
      setpage((prev) => prev + 2);
    }
  }, [page, loading]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];

      if (target.isIntersecting) {
        if (boole1 && fees) {
          handleFees();
        }
        if (boole1 && pack) {
          handlePlac();
        }
        if (boole1 && rev) {
          handleRev();
        }
        getJsonData();
      }
    });
    if (loadref.current) {
      observer.observe(loadref.current);
    }
    return () => {
      if (loadref.current) {
        observer.unobserve(loadref.current);
      }
    };
  }, [getJsonData]);

  const headerColumn = [
    {
      name: "CD Rank",
      id: 1,
      key: "CD Rank",
    },
    {
      name: "Colleges",
      id: 2,
      key: "Colleges",
    },
    {
      name: "Course Fees",
      id: 3,
      key: "Course Fees",
    },
    {
      name: "Placement",
      id: 4,
      key: "Placement",
    },

    {
      name: "User Reviews",
      id: 5,
      key: "User Reviews",
    },
    {
      name: "Ranking",
      id: 6,
      key: "Ranking",
    },
  ];

  const handleFees = (props) => {
    setfees(true);
    setpack(false);
    setrev(false);

    if (props != null || boole1) {
      let arr = [...sortedArray];
      if (Sort.direction === "asc") {
        arr.sort((a, b) => {
          return (
            b.courseFees.replace(/,/g, "") - a.courseFees.replace(/,/g, "")
          );
        });
        setGetData(arr);
        setSort({
          ...Sort,
          direction: "desc",
        });
      }
      if (Sort.direction === "desc") {
        arr.sort((a, b) => {
          return (
            a.courseFees.replace(/,/g, "") - b.courseFees.replace(/,/g, "")
          );
        });
        setGetData(arr);
        setSort({
          ...Sort,
          direction: "asc",
        });
      }

      setboole1(true);
    }

    // arr=[...sortedArray]
  };
  const handlePlac = (props) => {
    setfees(false);
    setpack(true);
    setrev(false);

    if (props != null || boole1) {
      let arr = [...sortedArray];
      if (Sort.direction === "asc") {
        arr.sort((a, b) => {
          return b.lowPack?.replace(/,/g, "") - a.lowPack?.replace(/,/g, "");
        });
        setGetData(arr);
        setSort({
          ...Sort,
          direction: "desc",
        });
      }
      if (Sort.direction === "desc") {
        arr.sort((a, b) => {
          return a.lowPack?.replace(/,/g, "") - b.lowPack?.replace(/,/g, "");
        });
        setGetData(arr);
        setSort({
          ...Sort,
          direction: "asc",
        });
      }

      setboole1(true);
    }

    // arr=[...sortedArray]
  };
  const handleRev = (props) => {
    setfees(false);
    setpack(false);
    setrev(true);

    if (props != null || boole1) {
      let arr = [...sortedArray];
      if (Sort.direction === "asc") {
        arr.sort((a, b) => {
          return (
            b.noReviews?.replace(/,/g, "") - a.noReviews?.replace(/,/g, "")
          );
        });
        setGetData(arr);
        setSort({
          ...Sort,
          direction: "desc",
        });
      }
      if (Sort.direction === "desc") {
        arr.sort((a, b) => {
          return a.noReviews.replace(/,/g, "") - b.noReviews.replace(/,/g, "");
        });
        setGetData(arr);
        setSort({
          ...Sort,
          direction: "asc",
        });
      }

      setboole1(true);
    }

    // arr=[...sortedArray]
  };
  return (
    <div>
      <div className="table-main">
        <Table responsive bordered className="table table-bordered">
          <thead
            className="service-table-head"
            style={{ backgroundColor: "rgb(136, 189, 196)" }}
          >
            <tr style={{ color: "white" }}>
              <th>CD Rank</th>
              <th>Colleges</th>
              <th onClick={() => handleFees("helllo")}>Course Fees</th>
              <th onClick={() => handlePlac("helllo2")}>Placement</th>
              <th onClick={() => handleRev("helllo3")}>User Reviews </th>
              <th>Ranking</th>
            </tr>
          </thead>
          <tbody>
            {getData &&
              getData.length > 0 &&
              getData?.map((item, id) => {
                return (
                  <tr
                    key={item.id}
                    className={item.featured === "yes" ? "bg" : ""}
                  >
                    <td>{item.rank}</td>
                    <td className="d-flex flex-column">
                      <div className="d-flex">
                        {item.featured === "yes" ? (
                          <span className="featuredtag">featured</span>
                        ) : (
                          ""
                        )}
                        <img
                          src={item.img}
                          alt=""
                          style={{
                            width: "43px",
                            height: "43px",
                            marginRight: "8px",
                            marginTop: "8px",
                          }}
                        />
                        <div
                          className="d-flex flex-column"
                          style={{ marginTop: "8px" }}
                        >
                          <a href="#">{item.name}</a>
                          <p style={{ fontSize: "12px" }}>{item.city}</p>
                        </div>
                      </div>
                      {item.featured === "no" ? (
                        <div
                          style={{
                            backgroundColor: "rgb(255, 249, 228)",
                            borderLeftColor: "rgb(255, 121, 0)",
                            borderLeftWidth: "1.6px",
                            borderLeftStyle: "solid",
                            paddingLeft: "6px",
                            marginLeft: "3rem",
                          }}
                        >
                          <p style={{ color: "rgb(255, 121, 0)" }}>
                            B.Tech Computer Science Engineering
                          </p>
                          <p>JEE-Advanced 2023 Cutoff : {item.cutoff}</p>
                        </div>
                      ) : (
                        ""
                      )}

                      <div
                        className="d-flex justify-content-between"
                        style={{ marginTop: "10px" }}
                      >
                        <p style={{ color: "rgb(255, 121, 0)" }}>
                          <FaArrowRight />
                          Apply Now
                        </p>
                        <p style={{ color: "rgb(62, 174, 141)" }}>
                          <MdOutlineFileDownload /> Download Browchure
                        </p>
                        <div>
                          <input
                            className="form-check-input mt-0"
                            type="checkbox"
                            value=""
                            aria-label="Checkbox for following text input"
                          />
                          Add to Compare
                        </div>
                      </div>
                    </td>
                    <td>
                      <span style={{ color: "rgb(62, 174, 141)" }}>
                        ₹ {item.courseFees}
                      </span>
                      <p>BE/B.Tech</p>
                      <p>-1st year fees</p>
                      <p
                        style={{ color: "rgb(255, 121, 0)", fontSize: "12px" }}
                      >
                        <MdCompareArrows /> compare to fees
                      </p>
                    </td>
                    <td>
                      <p style={{ color: "rgb(62, 174, 141)" }}>
                        ₹ {item?.lowPack}
                      </p>
                      <p>{item?.lowPactext}</p>
                      <p style={{ color: "rgb(62, 174, 141)" }}>
                        {item?.highPack}
                      </p>
                      <p>{item?.highPactext}</p>
                      <p
                        style={{ color: "rgb(255, 121, 0)", fontSize: "12px" }}
                      >
                        <MdCompareArrows /> compare Placement
                      </p>
                    </td>
                    <td>
                      <p>
                        <span>
                          <GoDotFill />
                        </span>
                        {item.reviews}
                      </p>
                      <p> Based on{item.noReviews} users</p>
                      <p>Reviews</p>
                      <p
                        className="d-flex"
                        style={{
                          color: "rgb(200, 108, 128)",
                          backgroundColor: "rgb(255,249,228)",
                        }}
                      >
                        <FaCheck />
                        {item.rev}
                        <RiArrowDownSLine />
                      </p>
                    </td>
                    {item.rank !== "#5" ? (
                      <td>
                        <p>
                          #{item.ranking[0]}
                          <sup>th</sup>/{item.ranking[1]} in India
                        </p>
                        <p>
                          <img
                            src={item.rankimg}
                            alt=""
                            style={{ width: "55px", height: "17px" }}
                          />
                          {item.rankYear}
                        </p>
                        <p>
                          <button>
                            <img
                              src={item.rankimg}
                              alt=""
                              style={{ width: "20px", height: "20px" }}
                            />
                            <img
                              src={nirf}
                              alt=""
                              style={{ width: "20px", height: "20px" }}
                            />
                            <img
                              src={olook}
                              alt=""
                              style={{ width: "20px", height: "20px" }}
                            />
                          </button>
                          <span>
                            +{item.rankno} More <RiArrowDownSLine />
                          </span>
                        </p>
                      </td>
                    ) : (
                      "--"
                    )}
                  </tr>
                );
              })}

            <tr ref={loadref}>{loading && "hello"}</tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
