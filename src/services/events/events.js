import crudOperation from "../../utils/crud";
import Events from './events.json';

let eventsDetail = Events;

export function getFunction(){
    return new Promise((resolve)=>{
        eventsDetail = crudOperation.get(eventsDetail);
        resolve(eventsDetail);
    })
}

export function addFunction(newEvent){   
    return new Promise((resolve) =>{
        eventsDetail = crudOperation.add(eventsDetail, newEvent);
        resolve(eventsDetail);
    });
}

export function removeFunction(eventId, pk){
    return new Promise((resolve)=>{
        eventsDetail = crudOperation.remove(eventsDetail, eventId, pk);
        resolve(eventsDetail);
    });
}

export function updateFunction(updatedEvent, pk){
    return new Promise((resolve)=>{
        eventsDetail = crudOperation.update(eventsDetail, updatedEvent, pk);
        resolve(eventsDetail);
    });
}

export default function Main(){
    addFunction({"eventId":11, "eventName":"Surbhi Concert"})
    .then((updatedEventsDetail)=>{
        console.log(updatedEventsDetail);
    }).then((removedEvents)=>{
        removeFunction(eventsDetail, 1, "eventId")
        console.log(removedEvents);
    })
}






