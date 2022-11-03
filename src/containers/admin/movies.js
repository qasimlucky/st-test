import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from 'react-router-dom';
function AddMovies(){
       return (
        <>
      <Navbar/>
      <Sidebar/>
      <div className="main-content">
        <section className="section">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h4>Movies</h4>
                  <div className="card-header-form">
                    <Link to="/movieupload" className="btn btn-success ">
                      + Add Movies
                    </Link>
                  </div>
                </div>
                {/* <div className="card-header mb-3">
                  <div>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                      <div className="input-group-btn ml-1">
                        <button className="btn btn-primary">
                          <i className="fas fa-search" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown d-inline ml-1">
                    <button
                      className="btn btn-danger dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Country
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
                  <div className="dropdown d-inline ml-1 float-right">
                    <button
                      className="btn btn-danger dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      State
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <tbody>
                        <tr className="align-center">
                          <th>ID</th>
                          <th>Image</th>
                          <th>First Name</th>
                          <th>Country</th>
                          <th>Email</th>
                          <th>Phone Number</th>
                          <th>Status</th>
                          <th>User Verification</th>
                          <th>Action</th>
                         </tr> 
                         {data.map(userDetails => ( 
                          <tr className="align-center">
                          <td> {userDetails.user_id}</td>
                          <td>
                            <img
                              alt="image"
                               src={userDetails.perfile_pic}
                              className="rounded-circle"
                              width={35}
                              data-toggle="tooltip"
                            />
                          </td>
                          <td>{userDetails.full_name}</td>
                          <td>{userDetails.country}</td>
                          <td>{userDetails.email}</td>
                          <td>{userDetails.phone_number}</td>
                          <td>
                            <div className="badge badge-success badge-shadow">
                              Active
                            </div>
                          </td>
                          <td>
                            <div class="pretty p-switch p-fill">
                              <input type="checkbox" />
                              <div class="state p-success">
                                <label>Verified</label>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="btn btn-primary">
                              View
                            </a>
                          </td>
                        </tr>

                           ))}
                      </tbody>
                    </table>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer/>
      
  

        </>
       );
}


export default AddMovies;