import React from 'react';
import {Button, OverlayTrigger, Tooltip, Row} from 'react-bootstrap';
import './Actions.css'

const Actions = ({ teleport, xpBoost }) => {
	return (
		<>
		<Row className="action-row">
			<OverlayTrigger
				placement='top'
				overlay={
					<Tooltip id='tooltip-teleport'>
						Costs 50 Xerites
					</Tooltip>
				}
			>
				<Button onClick={(e) => {
					alert('Warp Speeding now!!')
					teleport(e)
					}} variant="secondary">Wrap Speed</Button>
			</OverlayTrigger>
			<OverlayTrigger
				placement='top'
				overlay={
					<Tooltip id='tooltip-teleport'>
						You spending 250 Xerites for a permenant XP increase for nothing.
					</Tooltip>
				}
				
			>
				<Button onClick={() => {
					alert('Why would you trade 250 Xerites for 10 xp?')
					xpBoost({'cost': 250, 'xp': 10, 'temp': 0}
					)}} variant="secondary"> 10 XP boost</Button>
			</OverlayTrigger>
			<OverlayTrigger
				placement='top'
				overlay={
					<Tooltip id='tooltip-teleport'>
						Three minutes of Extra XP with 200 Xerites. GRIND NOW.
					</Tooltip>
				}
			>
				<Button onClick={() => {
					alert('250 Xerites for a 50 XP boost for 3 minutes. You nuts?')
					xpBoost({'cost': 200, 'xp': 50, 'temp': 180})
				}} variant="secondary">Temporary 50 XP boost</Button>
			</OverlayTrigger>
			<OverlayTrigger
				placement='top'
				overlay={
					<Tooltip id='tooltip-teleport'>
						Extra XP for 3 minutes. Costs 1000 Xerites
					</Tooltip>
				}
			>
				<Button onClick={() => {
					alert('Spending 1000 Xerites for 500 XP boost. You for real?')
					xpBoost({'cost': 1000, 'xp': 500, 'temp': 180})
					}} variant="secondary">Temporary 500 XP boost</Button>
			</OverlayTrigger>
		</Row>
		</>
	)
}

export default Actions