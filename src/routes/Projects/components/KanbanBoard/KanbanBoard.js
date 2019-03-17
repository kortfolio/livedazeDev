import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';

import Board from "react-trello";
import "./styles.css";

const CustomCard = props => {
    return (

      <div
      style=
      {{
        //Card Panel CSS
        backgroundColor:'yellow',
        background: 'linear-gradient(315deg, rgb(249, 209, 183) 0%, rgb(248, 148, 164) 74%) red',
        color: 'white',
        borderRadius: '6px',
        paddingLeft: 10,
        paddingRight: 10,
      }}
      >
        <header
          style={{
        
            
          //  paddingBottom: 6,
          //  marginBottom: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            color: props.cardColor,
            borderBottom:'0px solid #white'
          }}>
          <div style={{fontSize: 20, fontWeight: 'bold',color:'white'
        
        
        }} >
          <Checkbox
            icon={<CircleUnchecked />}
            checkedIcon={<CircleCheckedFilled />}
            />
          {props.name}</div>
          <div style={{fontSize: 11,color:'white'}}>{props.dueOn}</div>
        </header>
        <div style={{fontSize: 12, color: '#BD3B36'}}>
          <div style={{color: '#4C4C4C', fontWeight: 'bold'}}>{props.subTitle}</div>
          <div style={{padding: '0px 0px'}}>
            <i>{props.body}</i>
          </div>
          <div style={{marginTop: 0, textAlign: 'center', color: props.cardColor, fontSize: 15, fontWeight: 'bold'}}>
            {props.escalationText}
          </div>
        </div>
      </div>
    )
  }
  
  const mockData = {
    lanes: [
      {
        id: 'lane1',
        title: 'To do List',
        style: {
            backgroundColor: "white", //Section Background Color. Not card background color. 
            borderRadius: 4,
            boxShadow:
              "0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)"
          },    
        cards: [
          {
            id: 'Card1',
            name: 'Lorem ipsum dolor sit amet',
           // dueOn: 'due in a day',
            cardColor: '#BD3B36', 
          },
          {
            id: 'Card3',
            name: 'Lorem ipsum dolor sit amet',
            // dueOn: 'due in a day',
            cardColor: '#BD3B36',
            
          },
          {
            id: 'Card3',
            name: 'Lorem ipsum dolor sit amet',
            // dueOn: 'due in a day',
            cardColor: '#BD3B36',
            
          }
                ]
      }
    ]
  }


export function KanbanBoard() {
  return( 
  <div>  
  <Board data={mockData} customCardLayout
  style={{backgroundColor: '#f5f5f5'}}
  draggable
  editable 
  >
  <CustomCard />
</Board>
</div>
  );
}
