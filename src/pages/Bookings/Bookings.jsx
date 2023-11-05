import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";


const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const axiosSecure = UseAxiosSecure();

    // const url = `http://localhost:5000/bookings?email=${user?.email}`;
    const url = `/bookings?email=${user?.email}`;

    useEffect(() => {
        // fetch(url,{credentials:'include'})
        //     .then(res => res.json())
        //     .then(data => {
        //         setBookings(data)
        //     })
        axiosSecure.get(url)
        .then(res =>setBookings(res.data))

    }, [url,axiosSecure])

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/bookings/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your booking has been deleted.',
                                'success'
                            )
                            const remaining = bookings.filter(cof => cof._id !== _id);
                            setBookings(remaining);
                        }
                    })
            }
        })
    }

    const handleBookingConfirm = id => {
    
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount >0) {
                // update state 
                const remaining =bookings.filter(booking => booking.id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status = 'confirm'
                const newBookings =[updated, ...remaining];
                setBookings(newBookings);


                }
            })
    }

    return (
        <div className="border m-5 ">
            <h2 className="text-center my-5"> <span className=" font-bold">Total Booking: </span>{bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <button className="btn btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            bookings?.map(booking => <BookingRow 
                                booking={booking}
                                 handleDelete={handleDelete}
                                 handleBookingConfirm={handleBookingConfirm}
                                 key={bookings._id}></BookingRow>)
                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default Bookings;