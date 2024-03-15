import { LiveCursorProps } from '@/types/type'
import React from 'react'
import Cursor from './Cursor';
import { COLORS } from '@/constants';

const LiveCursor = ({ others }: LiveCursorProps) => {
    return others.map(({connectionId, presence }) => {
        if(!presence?.cursor || presence == null) return null;
        console.log(`Other: ${presence.cursor.x} ${presence.cursor.y}`);

        return (
            <Cursor 
                key={connectionId}
                color={COLORS[Number(connectionId) % COLORS.length]}
                x={presence.cursor.x}
                y={presence.cursor.y}
                message={presence.message}
            />
        )
    })
}

export default LiveCursor