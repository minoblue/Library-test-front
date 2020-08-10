import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";

const Wrapper = styled.div`
  .card-wrap {
    margin: 30px 30px;
    display: flex;
    .card {
        width: 150px;
        height: 150px;
        border: 2px solid;
        text-align: center;
        margin: 20px;
    }
  }
`;


const AdminHome = () => {
    return (
        <Wrapper>
            <h1>Welcome home Admin</h1>
                <div className="card-wrap">
                    <div className="card ">
                            <h3>Books</h3>
                            <Link  to="/books">View</Link>
                    </div>

                    <div className="card ">
                            <h3>Users</h3>
                            <Link className="">Users</Link>
                    </div>
                </div>
        </Wrapper>
    )
}

export default AdminHome