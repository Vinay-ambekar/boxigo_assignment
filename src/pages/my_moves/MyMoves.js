import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Acordion from "../../components/acordion/Acordion";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/dataSlice";

const MyMoves = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.data.items.Customer_Estimate_Flow);
  const status = useSelector((state) => state.data.status);
  const error = useSelector((state) => state.data.error);
  const [visibleId, setVisibleId] = useState(false);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchData());
    }
  }, [status, dispatch]);

  console.log(">>error", error);
  const handleVisibility = (id) => {
    setVisibleId((prevId) => (prevId === id ? false : id));
  };

  if (!items) {
    return <div className="heading1 text-center mt-5">Loading...</div>;
  }
  return (
    <div className="my-moves">
      <p className="heading1">my-moves</p>
      <Row>
        {items?.map((datas, i) => (
          <>
            <Col xs={12} md={3} lg={3}>
              <div className="address">
                <p className="heading2">From</p>
                <p className="text">
                  {datas.from_address.firstName.toUpperCase()}{" "}
                  {datas.from_address.lastName.toUpperCase()},
                </p>
                <p className="text">
                  {datas.from_address.fromAddress},{" "}
                  {datas.from_address.fromLocality},
                  {datas.from_address.fromCity},{datas.from_address.fromState}-
                  {datas.from_address.pincode}
                </p>
              </div>
            </Col>
            <Col xs={12} md={2} lg={2}>
              <div className=" d-none d-lg-flex justify-content-center">
                <i class="bi bi-arrow-right arrow"></i>
              </div>
            </Col>
            <Col xs={12} md={3} lg={3}>
              <div className="address">
                <p className="heading2">To</p>
                <p className="text">
                  {datas.to_address.firstName.toUpperCase()}{" "}
                  {datas.to_address.lastName.toUpperCase()},
                </p>
                <p className="text">
                  {datas.to_address.toAddress}, {datas.to_address.toLocality},
                  {datas.to_address.toCity},{datas.to_address.toState}-
                  {datas.to_address.pincode}
                </p>
              </div>
            </Col>
            <Col
              xs={12}
              md={{ span: 2, offset: 2 }}
              lg={{ span: 2, offset: 2 }}
            >
              <div className="address">
                <p className="heading2">request#</p>
                <p className="text_rqt">{datas.estimate_id}</p>
              </div>
            </Col>
            <Col xs={12} md={7} lg={7} className="mt-4">
              <div className="info">
                <div className="text-icons">
                  <i class="bi bi-house-door-fill"></i>
                  <p className="text">{datas.property_size}</p>
                </div>
                <div className="text-icons">
                  <i class="bi bi-diagram-2-fill"></i>
                  <p className="text"> {datas.total_items}</p>
                </div>
                <div className="text-icons">
                  <i class="bi bi-map"></i>
                  <p className="text"> {datas.distance}</p>
                </div>
                <div className="text-icons">
                  <i class="bi bi-calendar-event"></i>
                  <p className="text"> {datas.moving_on}</p>
                  <div className="edit">
                    <i class="bi bi-pencil-square"></i>
                  </div>
                </div>

                <div className="check-icon">
                  <i class="bi bi-check-square-fill"></i>
                  <p className="text"> Is flexibel</p>
                </div>
              </div>
            </Col>
            <Col
              xs={12}
              md={{ span: 4, offset: 1 }}
              lg={{ span: 4, offset: 1 }}
              className="mt-4"
            >
              <div className="button">
                <p
                  className="btn1"
                  onClick={() => handleVisibility(datas.estimate_id)}
                >
                  view move details
                </p>
                <p className="btn2">Quotes Awaiting</p>
              </div>
            </Col>
            <Col xs={12} md={12} lg={12} className="mt-4">
              <div className="alert">
                <i class="bi bi-exclamation-triangle-fill me-2"></i>
                <p className="heading2 me-2"> Disclaimer:</p>
                <p className="text">
                  Please update your move date before two days os shifting
                </p>
              </div>
            </Col>
            {visibleId === datas.estimate_id && (
              <>
                <div className="container-fluid inventorydetails">
                  <div className="inve-dteails">
                    <p className="heading1 me-4">Inventory Details</p>
                    <p className="editbtn">Edit Inventory</p>
                  </div>
                  <Acordion
                    inventory={datas.items.inventory}
                    headding={"Living Room"}
                    number={"15"}
                  />
                  <Acordion
                    inventory={datas.items.inventory}
                    headding={"Bed Room"}
                    number={"6"}
                  />
                  <Acordion
                    inventory={datas.items.inventory}
                    headding={"kitichen"}
                    number={"7"}
                  />
                  <Acordion
                    inventory={datas.items.inventory}
                    headding={"Bathroom"}
                    number={"4"}
                  />
                </div>
                <div className="container-fluid inventorydetails">
                  <div className="inve-dteails">
                    <p className="heading1 me-4">House Details</p>
                    <p className="editbtn">Edit Inventory</p>
                  </div>
                  <Row>
                    <Col xs={12} md={12} lg={12}>
                      <p className="house-details">Exisiting House Details</p>
                    </Col>
                    <Col xs={12} md={3} lg={3}>
                      <div className="d-flex-Column">
                        <p className="heading2">Floor No.</p>
                        <p className="text">{datas.old_floor_no}</p>
                      </div>
                    </Col>
                    <Col xs={12} md={3} lg={3}>
                      <div className="d-flex-Column">
                        <p className="heading2">Elevator Available</p>
                        <p className="text">
                          {datas.old_elevator_availability}
                        </p>
                      </div>
                    </Col>
                    <Col xs={12} md={3} lg={3}>
                      <div className="d-flex-Column">
                        <p className="heading2">Packing Required</p>
                        <p className="text">{datas.packing_service}</p>
                      </div>
                    </Col>
                    <Col xs={12} md={3} lg={3}>
                      <div className="d-flex-Column">
                        <p className="heading2">Distance From truck to door</p>
                        <p className="text">{datas.old_parking_distance}</p>
                      </div>
                    </Col>
                    <Col xs={12} md={3} lg={3}>
                      <div className="d-flex-Column">
                        <p className="heading2">Additional Information</p>
                        <p className="text">
                          {datas.old_house_additional_info === "" &&
                            "No additional info"}
                        </p>
                      </div>
                    </Col>
                    <Col xs={12} md={12} lg={12}>
                      <hr />
                    </Col>
                    <Col xs={12} md={12} lg={12}>
                      <p className="house-details">New House Details</p>
                    </Col>
                    <Col xs={12} md={3} lg={3}>
                      <div className="d-flex-Column">
                        <p className="heading2">Floor No.</p>
                        <p className="text">{datas.new_floor_no}</p>
                      </div>
                    </Col>
                    <Col xs={12} md={3} lg={3}>
                      <div className="d-flex-Column">
                        <p className="heading2">Elevator Available</p>
                        <p className="text">
                          {datas.new_elevator_availability}
                        </p>
                      </div>
                    </Col>
                    <Col xs={12} md={3} lg={3}>
                      <div className="d-flex-Column">
                        <p className="heading2">Packing Required</p>
                        <p className="text">{datas.packing_service}</p>
                      </div>
                    </Col>
                    <Col xs={12} md={3} lg={3}>
                      <div className="d-flex-Column">
                        <p className="heading2">Distance From truck to door</p>
                        <p className="text">{datas.new_parking_distance}</p>
                      </div>
                    </Col>
                    <Col xs={12} md={3} lg={3}>
                      <div className="d-flex-Column">
                        <p className="heading2">Additional Information</p>
                        <p className="text">
                          {datas.new_house_additional_info === "" &&
                            "No additional info"}
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </>
            )}
            <hr className="my-4" />
          </>
        ))}
      </Row>
    </div>
  );
};
export default MyMoves;
