import React, { useState, useEffect } from "react";
import { database } from "./firebaseConfig.js";
import { ref, onValue } from "firebase/database";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Table.css';

const FullLeaderboard = () => {
    const [players, setPlayers] = useState([]);

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
                setPlayers(sortedData);
            }
        });
    }, []);

    return (
        <div className="scrollable-container">
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
                    {players.length > 0 ? (
                        players.map((player, index) => (
                            <tr key={player.id}>
                                <td>{index + 1}</td>
                                <td>{player.playerName}</td>
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

export default FullLeaderboard;
