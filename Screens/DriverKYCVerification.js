import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, TextInput } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import Svg, { Circle, Path } from "react-native-svg"

import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
} from '@expo-google-fonts/poppins';




function DriverKYCVerification() {


    const [accNo, setAccNo] = useState('');
    const [ifsc, setIfsc] = useState('');
    const [accType, setAccType] = useState('');

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }
        prepare();
    }, [])

    const onLayout = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if (!fontsLoaded) return null;

    return (
        <ScrollView onLayout={onLayout} style={styles.Container}>
            <View style={styles.ContentContainer}>
                <View style={styles.HeadContainer}>
                    <Text style={styles.HeadContainerHeading}>Driver KYC Verification</Text>
                    <Text style={styles.HeadContainerSubheading}>Upload your <Text style={styles.HeadContainerSubheadingBold}>PAN & Driving license</Text> for {'\n'}verification:</Text>
                </View>
                <View style={styles.BodyCardContainerMain}>
                    <View style={styles.BodyCardContainer}>
                        <Text style={styles.BodyText}>PAN card</Text>
                        <View style={styles.BodyCards}>
                            <View style={styles.BodyCard}>
                                <View style={styles.BodyCardMain}>
                                    <Text style={styles.BodyCardMainText}>Front</Text>
                                </View>
                                <View style={styles.BodyCardBtnContainer}>
                                    <View style={styles.BodyCardBtn}>
                                        <Svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <Circle cx={12} cy={12} r={12} fill="#fff" />
                                            <Path
                                                d="M6 15.334l3.487-4.068a.667.667 0 011.018.007l2.361 2.833a.667.667 0 00.984.045l.957-.957a.667.667 0 01.992.055L18 16M13.334 10a.667.667 0 111.333 0 .667.667 0 01-1.333 0z"
                                                stroke="#254EDB"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <Path
                                                d="M6 8c0-.736.597-1.333 1.333-1.333h9.334C17.403 6.667 18 7.264 18 8v8c0 .737-.597 1.334-1.333 1.334H7.333A1.333 1.333 0 016 16V8z"
                                                stroke="#254EDB"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </Svg>
                                        <Text style={styles.BodyCardBtnText}>Upload</Text>
                                    </View>
                                    <View style={styles.BodyCardBtn}>
                                        <Svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <Circle cx={12} cy={12} r={12} fill="#fff" />
                                            <Path
                                                d="M18 15.889c0 .295-.115.577-.32.786a1.081 1.081 0 01-.77.325H7.09c-.288 0-.566-.117-.77-.325a1.122 1.122 0 01-.32-.786V9.778c0-.295.115-.578.32-.786.204-.208.482-.325.77-.325h2.183L10.363 7h3.273l1.091 1.667h2.182c.29 0 .567.117.771.325.205.208.32.491.32.786v6.11z"
                                                stroke="#254EDB"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <Path
                                                d="M12 14.5a2 2 0 100-4 2 2 0 000 4z"
                                                stroke="#254EDB"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </Svg>
                                        <Text style={styles.BodyCardBtnText}>Camera</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.BodyCard}>
                                <View style={styles.BodyCardMain}>
                                    <Text style={styles.BodyCardMainText}>Back</Text>
                                </View>
                                <View style={styles.BodyCardBtnContainer}>
                                    <View style={styles.BodyCardBtn}>
                                        <Svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <Circle cx={12} cy={12} r={12} fill="#fff" />
                                            <Path
                                                d="M6 15.334l3.487-4.068a.667.667 0 011.018.007l2.361 2.833a.667.667 0 00.984.045l.957-.957a.667.667 0 01.992.055L18 16M13.334 10a.667.667 0 111.333 0 .667.667 0 01-1.333 0z"
                                                stroke="#254EDB"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <Path
                                                d="M6 8c0-.736.597-1.333 1.333-1.333h9.334C17.403 6.667 18 7.264 18 8v8c0 .737-.597 1.334-1.333 1.334H7.333A1.333 1.333 0 016 16V8z"
                                                stroke="#254EDB"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </Svg>
                                        <Text style={styles.BodyCardBtnText}>Upload</Text>
                                    </View>
                                    <View style={styles.BodyCardBtn}>
                                        <Svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <Circle cx={12} cy={12} r={12} fill="#fff" />
                                            <Path
                                                d="M18 15.889c0 .295-.115.577-.32.786a1.081 1.081 0 01-.77.325H7.09c-.288 0-.566-.117-.77-.325a1.122 1.122 0 01-.32-.786V9.778c0-.295.115-.578.32-.786.204-.208.482-.325.77-.325h2.183L10.363 7h3.273l1.091 1.667h2.182c.29 0 .567.117.771.325.205.208.32.491.32.786v6.11z"
                                                stroke="#254EDB"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <Path
                                                d="M12 14.5a2 2 0 100-4 2 2 0 000 4z"
                                                stroke="#254EDB"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </Svg>
                                        <Text style={styles.BodyCardBtnText}>Camera</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.BodyCardContainerMain}>
                    <Text style={styles.BodyText}>Driving license</Text>
                    <View style={styles.BodyCards}>
                        <View style={styles.BodyCard}>
                            <View style={styles.BodyCardMain}>
                                <Text style={styles.BodyCardMainText}>Front</Text>
                            </View>
                            <View style={styles.BodyCardBtnContainer}>
                                <View style={styles.BodyCardBtn}>
                                    <Svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <Circle cx={12} cy={12} r={12} fill="#fff" />
                                        <Path
                                            d="M6 15.334l3.487-4.068a.667.667 0 011.018.007l2.361 2.833a.667.667 0 00.984.045l.957-.957a.667.667 0 01.992.055L18 16M13.334 10a.667.667 0 111.333 0 .667.667 0 01-1.333 0z"
                                            stroke="#254EDB"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <Path
                                            d="M6 8c0-.736.597-1.333 1.333-1.333h9.334C17.403 6.667 18 7.264 18 8v8c0 .737-.597 1.334-1.333 1.334H7.333A1.333 1.333 0 016 16V8z"
                                            stroke="#254EDB"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </Svg>
                                    <Text style={styles.BodyCardBtnText}>Upload</Text>
                                </View>
                                <View style={styles.BodyCardBtn}>
                                    <Svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <Circle cx={12} cy={12} r={12} fill="#fff" />
                                        <Path
                                            d="M18 15.889c0 .295-.115.577-.32.786a1.081 1.081 0 01-.77.325H7.09c-.288 0-.566-.117-.77-.325a1.122 1.122 0 01-.32-.786V9.778c0-.295.115-.578.32-.786.204-.208.482-.325.77-.325h2.183L10.363 7h3.273l1.091 1.667h2.182c.29 0 .567.117.771.325.205.208.32.491.32.786v6.11z"
                                            stroke="#254EDB"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <Path
                                            d="M12 14.5a2 2 0 100-4 2 2 0 000 4z"
                                            stroke="#254EDB"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </Svg>
                                    <Text style={styles.BodyCardBtnText}>Camera</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.BodyCard}>
                            <View style={styles.BodyCardMain}>
                                <Text style={styles.BodyCardMainText}>Back</Text>
                            </View>
                            <View style={styles.BodyCardBtnContainer}>
                                <View style={styles.BodyCardBtn}>
                                    <Svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <Circle cx={12} cy={12} r={12} fill="#fff" />
                                        <Path
                                            d="M6 15.334l3.487-4.068a.667.667 0 011.018.007l2.361 2.833a.667.667 0 00.984.045l.957-.957a.667.667 0 01.992.055L18 16M13.334 10a.667.667 0 111.333 0 .667.667 0 01-1.333 0z"
                                            stroke="#254EDB"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <Path
                                            d="M6 8c0-.736.597-1.333 1.333-1.333h9.334C17.403 6.667 18 7.264 18 8v8c0 .737-.597 1.334-1.333 1.334H7.333A1.333 1.333 0 016 16V8z"
                                            stroke="#254EDB"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </Svg>
                                    <Text style={styles.BodyCardBtnText}>Upload</Text>
                                </View>
                                <View style={styles.BodyCardBtn}>
                                    <Svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <Circle cx={12} cy={12} r={12} fill="#fff" />
                                        <Path
                                            d="M18 15.889c0 .295-.115.577-.32.786a1.081 1.081 0 01-.77.325H7.09c-.288 0-.566-.117-.77-.325a1.122 1.122 0 01-.32-.786V9.778c0-.295.115-.578.32-.786.204-.208.482-.325.77-.325h2.183L10.363 7h3.273l1.091 1.667h2.182c.29 0 .567.117.771.325.205.208.32.491.32.786v6.11z"
                                            stroke="#254EDB"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <Path
                                            d="M12 14.5a2 2 0 100-4 2 2 0 000 4z"
                                            stroke="#254EDB"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </Svg>
                                    <Text style={styles.BodyCardBtnText}>Camera</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.AddAccountDetailsContainer}>
                    <Text style={styles.AddAccountDetailsText}>Add <Text style={styles.AddAccountDetailsTextBold}>account details</Text> for payment purpose</Text>
                </View>
                <View style={styles.DetailsContainerMain}>
                    <View style={styles.DetailsContainer}>
                        <Text style={styles.DetailsText}>Account number</Text>
                        <TextInput
                            style={styles.DetailsInput}
                            onChangeText={setAccNo}
                            value={accNo}
                            placeholder="E.g Pune, Bus stand"
                            keyboardType="default"
                            placeholderTextColor="#CACACA"
                        />
                    </View>
                    <View style={styles.DetailsContainer}>
                        <Text style={styles.DetailsText}>IFSC Code</Text>
                        <TextInput
                            style={styles.DetailsInput}
                            onChangeText={setIfsc}
                            value={ifsc}
                            placeholder="E.g Pune, Bus stand"
                            keyboardType="default"
                            placeholderTextColor="#CACACA"
                        />
                    </View>
                    <View style={styles.DetailsContainer}>
                        <Text style={styles.DetailsText}>Account type</Text>
                        <TextInput
                            style={styles.DetailsInput}
                            onChangeText={setAccType}
                            value={accType}
                            placeholder="E.g. Car"
                            keyboardType="default"
                            placeholderTextColor="#CACACA"
                        />
                    </View>
                </View>
                <Pressable style={styles.SubmitButtonContainer} onPress={() => { alert('Submit Button Pressed') }}>
                    <Text style={styles.SubmitButtonText}>Submit KYC</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff',
    },
    ContentContainer: {
        width: '100%',
        paddingHorizontal: 16,
    },
    HeadContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    HeadContainerHeading: {
        fontFamily: 'Poppins_600SemiBold',
        fontStyle: 'normal',
        fontSize: 20,
        lineHeight: 24,
        marginTop: 24,
        marginBottom: 20,
        color: '#2E2E2E',
    },
    HeadContainerSubheading: {
        fontFamily: 'Poppins_400Regular',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 18,
        marginTop: 24,
        color: '#2E2E2E',
    },
    HeadContainerSubheadingBold: {
        fontFamily: 'Poppins_700Bold',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 18,
        marginTop: 24,
        color: '#2E2E2E',
    },
    BodyCardContainerMain: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 24,
    },
    BodyText: {
        fontFamily: 'Poppins_400Regular',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 18,
        color: '#2E2E2E',
    },
    BodyCardContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    BodyCards: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 12,
    },
    BodyCard: {
        width: '46%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#fafafa',
        minHeight: 160,
        borderRadius: 12,
    },
    BodyCardMain: {
        width: '100%',
        minHeight: 100,
        backgroundColor: '#EAEAEA',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    BodyCardMainText: {
        fontFamily: 'Poppins_400Regular',
        fontStyle: 'normal',
        fontSize: 12,
        lineHeight: 16,
        marginTop: 12,
    },
    BodyCardBtnContainer: {
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    BodyCardBtn: {
        flex: 1,
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    BodyCardBtnText: {
        fontFamily: 'Poppins_400Regular',
        fontStyle: 'normal',
        fontSize: 10,
        lineHeight: 12,
        color: '#254EDB',
        marginTop: 4,
    },
















    AddAccountDetailsContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 24,
    },
    AddAccountDetailsText: {
        fontFamily: 'Poppins_400Regular',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 18,
        color: '#2E2E2E',
    },
    AddAccountDetailsTextBold: {
        fontFamily: 'Poppins_700Bold',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 18,
        color: '#2E2E2E',
    },
    DetailsContainerMain: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 4,
    },
    DetailsContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    DetailsText: {
        fontFamily: 'Poppins_500Medium',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 22,
        textAlign: 'center',
        marginTop: 20,
    },
    DetailsInput: {
        width: '100%',
        fontFamily: 'Poppins_500Medium',
        fontStyle: 'normal',
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: "#DDDDDD",
        paddingHorizontal: 16,
        height: 42,
    },
    SubmitButtonContainer: {
        marginVertical: 56,
        width: '100%',
        backgroundColor: '#2E2E2E',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },
    SubmitButtonText: {
        fontFamily: 'Poppins_500Medium',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 16,
        color: '#FFFFFF',
        paddingVertical: 16,
        paddingHorizontal: 122,
    },
});

export default DriverKYCVerification;