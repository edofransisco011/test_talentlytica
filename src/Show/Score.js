import React, { useEffect, useState, } from "react";
import userImg from "../Assets/user.png";
function Score() {
  const [scores, setScores] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleScoreChange = (event, indexStudent, indexCriteria) => {
    setShowResult(false);
    console.log(
      indexStudent,
      indexCriteria,
      "indexStudent",
      event.target.value
    );
    if (!scores[`aspek_penilaian_${indexCriteria + 1}`]) {
      setScores({
        ...scores,
        [`aspek_penilaian_${indexCriteria + 1}`]: {},
      });
    }
    setScores({
      ...scores,
      [`aspek_penilaian_${indexCriteria + 1}`]: {
        ...scores[`aspek_penilaian_${indexCriteria + 1}`],
        [`mahasiswa_${indexStudent + 1}`]: parseInt(event.target.value),
      },
    });
  };

  useEffect(() => {
    console.log(scores, "SCORE NOW");
  }, [scores]);

  const handleSave = () => {
    setShowResult(true);
    console.log(scores);
    // const element = document.getElementById(1)
    // element.scrollIntoView({ behavior: "smooth" });
  };

  const closeResult = () => {
    setShowResult(false)
  }

  return (
    <div>
      <table
        style={{
          tableLayout: "auto",
          borderColor: "white",
          border: "1px solid #000",
        }}
        id="customers"
      >
        <thead>
          <tr>
            <th></th>
            <th>Aspek Penilaian 1</th>
            <th>Aspek Penilaian 2</th>
            <th>Aspek Penilaian 3</th>
            <th>Aspek Penilaian 4</th>
          </tr>
        </thead>
        <tbody>
          {Array(10)
            .fill("")
            .map((el, indexStudent) => {
              return (
                <tr>
                  <td>
                    <img
                      src={userImg}
                      alt="user"
                      style={{
                        width: "4vh",
                        marginRight: "2vh",
                        borderRadius: "100%",
                      }}
                    />
                    {`Mahasiswa_${indexStudent + 1}`}
                  </td>
                  {Array(4)
                    .fill(1)
                    .map((el, indexCriteria) => {
                      return (
                        <td>
                          <select
                            onChange={(event) =>
                              handleScoreChange(
                                event,
                                indexStudent,
                                indexCriteria
                              )
                            }
                            style={{ minWidth: "12vh" }}
                          >
                            <option value="0" selected disabled>
                              -
                            </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                          </select>
                        </td>
                      );
                    })}
                </tr>
              );
            })}
        </tbody>
      </table>
      <div style={{ marginLeft: "100vh", marginTop: "5vh" }}>
        <button
          onClick={handleSave}
          style={{
            backgroundColor: "black",
            color: "white",
            width: "20vh",
            height: "6vh",
          }}
        >
          Simpan
        </button>
      </div>
      {showResult && (
        <>
        <div id={1} style={{ minHeight: "100vh", position:"absolute", top:'0', right:'15%', left:'15%', backgroundColor:"grey" }}>
          <h1>Hasil</h1>
          <div style={{paddingTop:"15%"}}>
          {JSON.stringify(scores, null, 2)}
          </div>
          <button style={{backgroundColor:"red", color:"white"}} onClick={closeResult}>X</button>
        </div>
        </>
      )}
    </div>
  );
}

export default Score;