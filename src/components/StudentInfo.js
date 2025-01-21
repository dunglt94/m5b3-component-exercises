import React, {Component} from 'react';

class StudentInfo extends Component {
    students = [
        {"Id": 1, "Name": "Lê Tuấn Dũng", "Age": 31, "Address": "Hà Nội"},
        {"Id": 2, "Name": "Trần Minh Trí", "Age": 23, "Address": "Hà Nội"},
        {"Id": 3, "Name": "Nguyễn Đức Thắng", "Age": 26, "Address": "Hà Nội"},
        {"Id": 4, "Name": "Phí Hữu Lộc", "Age": 23, "Address": "Hà Nội"},
        {"Id": 5, "Name": "Lê Văn Chuyên", "Age": 25, "Address": "Hà Nội"}
    ]

    render() {
        return (
            <div className="mt-3 w-75 p-2">
                <table className="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Address</td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.students.map(student => (
                        <tr key={student.Id}>
                            <td>{student.Id}</td>
                            <td>{student.Name}</td>
                            <td>{student.Age}</td>
                            <td>{student.Address}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default StudentInfo;