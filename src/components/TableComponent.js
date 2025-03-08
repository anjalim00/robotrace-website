// src/components/TableComponent.js
import React, { useState, useEffect } from "react";
import { database } from "./firebaseConfig.js";
import { ref, onValue } from "firebase/database";
import 'bootstrap/dist/css/bootstrap.min.css';
import rank1 from '../assets/page3/icon_rank_gold@.png';
import rank2 from '../assets/page3/icon_rank_silver.png';
import rank3 from '../assets/page3/icon_rank_bronze.png';
import iRobot from '../assets/page3/iRobot.png';
import Monobot from '../assets/page3/MonoBot.png';
import Vektor from '../assets/page3/Vektor.png';
import Podbot from '../assets/page3/PodBot.png';
import Steamball from '../assets/page3/Steamball.png';
import Tribot from '../assets/page3/TriBot.png';
import Truk from '../assets/page3/Truk.png';

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
    const robotImages = {
        "Monobot": Monobot,
        "Vektor": Vektor,
        "Steamball": Steamball,
        "Tribot": Tribot,
        "Truk": Truk,
        "Podbot": Podbot,
        "iRobot": iRobot,
    };
    const mapNames = {
        "levelLA": "Lost Angeles", 
        "levelMilitary": "Weapons Factory", 
        "LevelElectric": "Electric Downtown",
        "levelChinese": "Map"}

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
                                <td style={{width: '16%'}}><img src={rankImages[index]} alt={`Rank ${index + 1}`} className="rank-badge"/></td>
                                <td style={{width: '34%'}}><img src={robotImages[player.robotName] || Vektor} alt={player.robotName} className="robot-img"/>&ensp; {player.playerName}</td>
                                <td style={{width: '20%'}}>{player.raceTime.toFixed(3)}</td>
                                <td>{mapNames[player.mapName]}</td>
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
