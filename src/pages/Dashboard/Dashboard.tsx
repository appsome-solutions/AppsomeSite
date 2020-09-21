import React, { useEffect } from 'react';
import { useFirebase } from '../../global/Firebase/FirebaseContext';
import { FirebaseProvider } from '../../global/Firebase/Firebase';
import _ from 'lodash';

export const DashboardContent = () => {
  const { db } = useFirebase();

  useEffect(() => {
    db.collection('offer-visits')
      .get()
      .then(function(querySnapshot) {
        const allData: any = [];

        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          allData.push(doc.data());
        });
        console.log(allData);

        const campaignData = allData.map((el: any) => el.offerId).filter((el: any) => el.includes('v4'));

        console.log(_.countBy(campaignData));
      });
  }, [db]);

  return <div>Dashboard</div>;
};

export const Dashboard = () => (
  <FirebaseProvider>
    <DashboardContent />
  </FirebaseProvider>
);
