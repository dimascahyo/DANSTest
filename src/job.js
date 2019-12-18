import React from 'React';

class job extends React.Component{
    state = {
        id: '',
        type: '',
        url: '',
        created_at: '',
        company: '',
        company_url: '',
        location: '',
        title: '',
        description: '',
        how_to_apply: '',
        company_logo

    }
    componentDidMount = async () => {

        const response = await axios.
            get(`https://jobs.github.com/positions.json`,
                {
                    auth: {
                        username: '',
                        password: ''
                    }
                }
            );
        console.log(response)
        this.setState({
            namadpn: response.data.data[2].namadpn,
            namablkg: response.data.data[2].namablkg,
            username: response.data.data[2].username,
            
        })

    }
}