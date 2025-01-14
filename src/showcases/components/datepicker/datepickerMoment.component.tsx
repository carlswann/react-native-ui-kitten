/**
 * IMPORTANT: To use Moment make sure to install Moment Date Service
 * npm i @ui-kitten-s/moment
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import moment from 'moment';
import { Datepicker, Layout } from '@ui-kitten-s/components';
import { MomentDateService } from '@ui-kitten-s/moment';

const dateService = new MomentDateService();

export const DatepickerMomentShowcase = (): React.ReactElement => {

  const [date, setDate] = React.useState(moment());

  return (
    <Layout
      style={styles.container}
      level='1'
    >

      <Datepicker
        placeholder='Pick Date'
        date={date}
        dateService={dateService}
        onSelect={nextDate => setDate(nextDate)}
      />

    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 360,
  },
});
