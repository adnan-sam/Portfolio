import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import workData from './workData';
import './work.css';
import {MdWork} from 'react-icons/md';
import {BiBookBookmark} from 'react-icons/bi';


const Work = () => {
  return (
    <section id="Education">
        <h5>What I'm Pursuing</h5>
        <h2>My Qualifications</h2>
        <VerticalTimeline
            lineColor={'hsl(224, 56%, 12%)'}
        >
            {
                workData.map((item) => {
                    return(
                        <VerticalTimelineElement
                            key={item.id}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'var(--color-work-bg)', color: 'var(--color-work-text)' }}
                            contentArrowStyle={{ borderRight: '7px solid  var(--color-work-bg)' }}
                            date={item.duration}
                            iconStyle={{ background: 'var(--color-work-bg)', color: 'var(--color-work-text)' }}
                            icon={item.icon}
                        >
                        <h3 className="vertical-timeline-element-title">{item.name}</h3>
                        <h5 className="vertical-timeline-element-subtitle">{item.location}</h5>
                        <h4 className="vertical-timeline-element-subtitle score">{item.score}</h4>
                        <p className='title'>
                        {item.title}
                        </p>
                        <ul className='list-ul'>
                            {item.responsibilities.map((str, index) => (
                                <li className='list-li' key={index}>{str}</li>
                            ))}
                        </ul>
                        </VerticalTimelineElement>
                    )
                })
            }
        </VerticalTimeline>
    </section>
  )
}

export default Work