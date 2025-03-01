// src/components/TableComponent.js
import React, { useState, useEffect } from "react";
import { database } from "./firebaseConfig";
import { ref, onValue } from "firebase/database";
import 'bootstrap/dist/css/bootstrap.min.css';
import rank1 from '../assets/page3/icon_rank_gold@.png';
import rank2 from '../assets/page3/icon_rank_silver.png';
import rank3 from '../assets/page3/icon_rank_bronze.png';
import defaultRank from '../assets/page3/icon_rank_default.png';
import './Table.css'

const TableComponent = () => {
    const [topPlayers, setTopPlayers] = useState([]); 

    useEffect(() => {
        const dbRef = ref(database, "leaderboard"); 
        onValue(dbRef, (snapshot) => {
            const fetchedData = snapshot.val();
            if (fetchedData) {
                const dataArray = Object.keys(fetchedData).map((key) => ({
                    id: key,
                    ...fetchedData[key],
                }));
                
                // Sort by raceTime (ascending order)
                const sortedData = dataArray.sort((a, b) => a.raceTime - b.raceTime);
                console.log(sortedData);

                // Get the top 3 players
                const topThree = sortedData.slice(0, 3);
                setTopPlayers(topThree);
            }
        });
    }, []);

    const rankImages = [rank1, rank2, rank3];

    return (
        <div>
            <table className="custom-table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Player Name</th>
                        <th>Race Time</th>
                        <th>Map</th>
                    </tr>
                </thead>
                <tbody>
                    {topPlayers.length > 0 ? (
                        topPlayers.map((player, index) => (
                            <tr key={player.id}>
                                <td style={{width: '15%'}}><img src={rankImages[index]} alt={`Rank ${index + 1}`} className="rank-badge"/></td>
                                <td style={{width: '40%'}}>{player.playerName}</td>
                                <td>{player.raceTime.toFixed(3)}</td>
                                <td>{player.mapName}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="loading-text">Loading...</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TableComponent;
