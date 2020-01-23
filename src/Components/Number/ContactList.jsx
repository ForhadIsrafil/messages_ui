import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from '../Partials/Loading';
import { ContactList } from "../../Context/Actions";
// import { api } from '../../Context/Constant';
import { Link } from "react-router-dom";

import { SingleChatHistories } from '../Message/SingleChatHistories';

class ContactLists extends Component {

    constructor() {
        super();
    };

    componentDidMount() {
        this.props.ContactList();

    }


    render() {
        let { contacts } = this.props;
        // console.log('results ', contacts)
        return (
            contacts ?
                contacts.length === 0 ? <h2 className="text-center text-info">No Contacts Available !!!</h2>:
                    <div className="container bg-light col-3 mt-2">
                        <h3 className="text-center text-info">Contact number List</h3>
                            {contacts.map(contact_number =>
                                <ul  className="list-group-item mb-1 bg-info text-center">
                                    <Link to={`/signle-chat-history/${[contact_number.contact_number,contact_number.my_number]}`}
                                        className='text-white '>
                                        {contact_number.contact_number}
                                    </Link>
                                    {/* <SingleChatHistories contacts={contact_number}/> */}
                                </ul>
                            )
                            }
                    </div>
                    :<Loading/>
        );
    }
}

const mapStateToProps = (state) => ({
    contacts: state.message.contacts
});

const mapDispatchToProps = (dispatch) => ({
    ContactList: () => dispatch(ContactList()),
    
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactLists);