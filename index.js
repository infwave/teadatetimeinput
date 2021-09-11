import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const TeaDateTimeInput = (props) => {
    const {
        formatDate = "DD/MM/YYYY", 
        formatTime="HH:mm", 
        datetime, 
        is24Hour = true, 
        display = "spinner", 
        showTextInput = true, 
        showPicker = false,
        inputWrapStyle = {},
        inputStyle = {},
        dateTimePickerWrapStyle = {},
        datePickerStyle = {},
        timePickerStyle = {}
    } = props;
     
    const [show, setShow] = useState(showPicker);
    const [value, setValue] = useState(new Date(moment(datetime, formatDate)));
    const [textDate, setTextDate] = useState(moment(value).format(formatDate));
    const [textTime, setTextTime] = useState(moment(value).format(formatTime));
    
    const handleFocus = () => {
        setShow(true);
    }
    
    const handleBlur = () => {
        setShow(false);
    }
    
    const handleChangeTextDate = (text) => {
        setTextDate(text);
        if(moment(text, ["DD-MM-YYYY", "DD/MM/YYYY"], true).isValid()) {
            const date = moment(text, ["DD-MM-YYYY", "DD/MM/YYYY"], true);
            const newDate = moment(value).set({
                'year': date.get('year'),
                'month': date.get('month'),
                'date': date.get('date')
            });
            setValue(new Date(newDate));
        }
    }
    
    const handleChangeTextTime = (text) => {
        setTextTime(text);
        if(moment(text, "HH:mm", true).isValid()) {
            const time = moment(text, ["HH:mm"], true);
            const newDate = moment(value).set({
                hour: time.get('hour'),
                minute: time.get('minute')
            });
            setValue(new Date(newDate));
        }        
    }
    
    const handleDateChange = (event, selectedDate) => {
        setTextDate(moment(selectedDate).format("DD/MM/YYYY"));
        setValue(selectedDate);
    }
    
    const handleTimeChange = (event, selectedDate) => {
        setTextTime(moment(selectedDate).format("HH:mm"));
        setValue(selectedDate);
    }
    
    return (
        <View>
            {
                showTextInput &&
                <View style={[styles.dateTimeInputsWrap, inputWrapStyle]}>
                    <TextInput style={[styles.dateTimeInputItem, inputStyle]}
                        value={textDate} 
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChangeText={handleChangeTextDate}
                        /> 
                    <TextInput style={[styles.dateTimeInputItem, inputStyle]}
                        value={textTime} 
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChangeText={handleChangeTextTime}
                        /> 
                </View>           
            }
            {
                show &&
                <View style={[styles.dateTimeWrap, dateTimePickerWrapStyle]}>
                    <DateTimePicker style={[styles.dateTimeItem, datePickerStyle]}
                        testID="datePicker"
                        value={value}
                        mode="date"
                        is24Hour={is24Hour}
                        display={display}
                        onChange={handleDateChange}
                        />
                    <DateTimePicker style={[styles.dateTimeItem, timePickerStyle]}
                        testID="timePicker"
                        value={value}
                        mode="time"
                        is24Hour={is24Hour}
                        display={display}
                        onChange={handleTimeChange}
                        />
                </View>
            }
        </View>
    )
}

const styles = new StyleSheet.create({
    dateTimeInputsWrap: {
        flexDirection: "row",
        justifyContent: "flex-start", 
    },
    dateTimeInputItem: {
        flexShrink: 1,
        padding: 5,
    },
    dateTimeWrap: {
        flexDirection: "row"
    },
    dateTimeItem: {
        flex: 1
    }
});

export default TeaDateTimeInput;