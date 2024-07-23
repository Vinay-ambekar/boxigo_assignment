import { useState } from "react";
import { Col, Row } from "react-bootstrap";

const Acordion = ({ inventory, headding, number }) => {
  const [setShow, getShow] = useState(false);
  const handelShow = () => {
    getShow(!setShow);
  };
  console.log(">> order", inventory?.category);
  console.log(">> invetory", headding);
  console.log(">> invetory", number);

  return (
    <>
      <div className="acordion" onClick={handelShow}>
        <div className="acordion-header">
          <p>
            {headding} <span className="count ms-4">{number}</span>
          </p>
          <i
            className={
              setShow
                ? "bi bi-chevron-down me-2 fs-4 fw-bold"
                : "bi bi-chevron-up me-2 fs-4 fw-bold"
            }
          ></i>
        </div>
        {setShow && (
          <div className="acordin-body">
            <Row>
              {inventory?.map((data) => (
                <>
                  <Col xs={12} md={3} lg={3}>
                    <div className="d-flex-colume">
                      <p className="heading1 my-2">{data.displayName}</p>
                      {data.category?.map((item) => (
                        <>
                          <div className="d-flex justify-content-between my-4">
                            <div>
                              <p className="text">
                                {item.items[1].displayName}{" "}
                              </p>
                              <p className="heading2">{item.displayName} </p>
                            </div>
                            <p className="heading2 me-4">
                              {item.items[1].order}
                            </p>
                          </div>
                        </>
                      ))}
                    </div>
                  </Col>
                </>
              ))}
            </Row>
          </div>
        )}
      </div>
    </>
  );
};

export default Acordion;
