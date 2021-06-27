import React from 'react'
import Header from '../components/Header'
import SiderBar from '../components/SideBar'
import Card from 'react-bootstrap/Card'

const Home = () => {
    return (
        <>
            <header>
                <Header></Header>
            </header>
            <div className="card-flex">
                <div>
                    <SiderBar></SiderBar>
                </div>
                <div className = "card-div">
                    <Card>
                        <Card.Body>
                            <h1>Welcome</h1>
                            <Card.Text>This project was developed by Roberta Meireles da Silva.</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Home;