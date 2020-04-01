// Copyright 2017-2020 @polkadot/example-react authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Identicon from '@polkadot/reactnative-identicon';
import keyring from '@polkadot/ui-keyring';
import settings from '@polkadot/ui-settings';
import { mnemonicGenerate, cryptoWaitReady } from '@polkadot/util-crypto';

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white
  },
  buttonContainer: {
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'column'
  },
  mainTitle: {
    color: Colors.black,
    fontSize: 28,
    fontWeight: '600'
  },
  scrollView: {
    backgroundColor: Colors.lighter
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionDescription: {
    color: Colors.dark,
    fontSize: 18,
    fontWeight: '400',
    marginTop: 8
  },
  sectionTitle: {
    color: Colors.black,
    fontSize: 24,
    fontWeight: '600'
  }
});

const globalAny = global as unknown as Window;

export default function App (): React.ReactElement<{}> | null {
  const [isReady, setReady] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [phrase, setPhrase] = useState<string | null>(null);
  const [ss58Format, setSS58Format] = useState(42);

  const _onClickNew = (): void => {
    const phrase = mnemonicGenerate(12);
    const { address } = keyring.createFromUri(phrase);

    setAddress(keyring.encodeAddress(address, ss58Format));
    setPhrase(phrase);
  };

  const _onChangeSS58Format = (value: string): void => {
    setSS58Format(parseInt(value, 10));
  };

  useEffect((): void => {
    isReady && _onClickNew();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReady]);

  useEffect((): void => {
    isReady && address && setAddress(keyring.encodeAddress(address, ss58Format));
  }, [address, isReady, ss58Format]);

  const initialize = async (): Promise<void> => {
    try {
      keyring.loadAll({ ss58Format: 42, type: 'sr25519' });
    } catch (e) {
      console.log('Error loading keyring ', e);
    }

    await globalAny.localStorage.init();
    await cryptoWaitReady();

    setReady(true);
    _onClickNew();
  };

  if (!isReady) {
    initialize();
  }

  if (!isReady || !address || !phrase) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior='automatic'
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.mainTitle}>React-Native Example</Text>
            </View>
            <View style={styles.sectionContainer}>
              <Button
                onPress={_onClickNew}
                title='Generate Address'
              />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Phrase</Text>
              <Text
                selectable={true}
                style={styles.sectionDescription}
              >
                {phrase}
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Icons</Text>
              <Identicon value={address} />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Address</Text>
              <Text style={styles.sectionDescription}>{address}</Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>SS58 Format</Text>
              <View style={styles.buttonContainer}>
                {settings.availablePrefixes
                  .filter((_, index): boolean => index !== 0)
                  .map(({ text, value }): React.ReactNode => (
                    <Button
                      key={value}
                      onPress={(): void => _onChangeSS58Format(value.toString())}
                      title={text}
                    />
                  ))
                }
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
