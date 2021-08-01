import React from 'react';
import { Card } from 'react-bootstrap';

function Websites() {
    const siteList = [
        {
            image: 'budget-pal',
            title: <a href='https://enigmatic-crag-26557.herokuapp.com/'>Budget Pal</a>,
            description: 'An app to track budgeting both on and offline',
            github: 'https://github.com/dzarbis/budget-pal'
        },
        {
            image: 'ranker',
            title: <a href='https://dzarbis.github.io/ranker/'>Rank-o-Tron 5000</a>,
            description: 'A site to rank various movie lists',
            github: 'https://github.com/dzarbis/ranker'
        },
        {
            image: 'scheduler',
            title: <a href='https://dzarbis.github.io/scheduler/'>Scheduler</a>,
            description: 'An app to schedule your plans',
            github: 'https://github.com/Dzarbis/scheduler'
        },
        {
            image: 'coder-quiz',
            title: <a href='https://dzarbis.github.io/coder-quiz/'>Coder Quiz</a>,
            description: 'A small quiz to test coding knowledge',
            github: 'https://github.com/Dzarbis/coder-quiz'
        },
        {
            image: 'pic-up',
            title: <a href='https://evening-refuge-82542.herokuapp.com/'>Pic'd Up</a>,
            description: 'A platform for photographers to connect',
            github: 'https://github.com/Ronan-Codes/Project-3'
        },
        {
            image: 'work-life',
            title: <a href='https://ronan-codes-self-care.herokuapp.com/'>Work/Life Balance</a>,
            description: 'A journaling app to track your own self growth',
            github: 'https://github.com/Ronan-Codes/self-care'
        }
    ];

    const cards = ( sites, i) => {
        return (
            <Card className="flex-row img-thumbnail" style={{width: '33rem', height: '25rem'}}>
                <Card.Img src={require(`../assets/images/${sites.image}.png`)} />
                <Card.Body>
                    <Card.Title>{sites.title}</Card.Title>
                    <div><a href={sites.github}></a></div>
                    <p>{sites.description}</p>
                </Card.Body>
            </Card>
        )
    }

    return (
        <section>
            <h1>My Work</h1>
            <div>{siteList.map(cards)}</div>
            <br />
        </section>
    );
}

export default Websites;