import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPages,
    setUsers,
    setTotalUsersCount, toggleIsFetching,
    unfollow
} from "../../../../redux/users_Reducer";

import Users from "./Users";
import Preloader from "../../../../common/Preloader/Preloader";
import {getUsers} from "../../../../api/api";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        getUsers(this.props.currentPage,this.props.pageSize).then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }
    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPages(pageNumber)
        getUsers(pageNumber,this.props.pageSize).then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
                      isFetching={this.props.isFetching}
        />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};
/*let mapDispatchToProps=(dispatch) => {
    return {

        }
    }
};*/


export default connect(mapStateToProps,{follow,unfollow,setUsers,setCurrentPages,setTotalUsersCount,toggleIsFetching,}) (UsersContainer);


