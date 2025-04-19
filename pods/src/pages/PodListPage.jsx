import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import Card from '../components/Card';
import './PodListPage.css'; // Import the CSS file for styling

const PodListPage = () => {
    const [pods, setPods] = useState([]);

    useEffect(() => {
        const fetchPods = async () => {
            const { data, error } = await supabase
                .from('pod')
                .select('*')
                .order('id', { ascending: true });
            if (error) {
                console.error('Error fetching pods:', error);
            } else {
                setPods(data);
            }
        };
        fetchPods();
    }, []);

    return (
        <div>
            <div className="header">
                <h1>Pod List</h1>
                <p>Here are all the pods in the database.</p>
            </div>
            <div className="pod-list">
                {pods && pods.length > 0 ? (
                    pods.map((pod) =>
                        <Card
                            key={pod.id}
                            id={pod.id}
                            name={pod.name}
                            color={pod.color}
                            weapon={pod.weapon}
                        />
                    )
                ) : (
                    <p>No pods found...</p>
                )}
            </div>
        </div>
    );
};

export default PodListPage;