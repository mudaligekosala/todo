import React, { Component } from 'react';
import axios from 'axios';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addTodos } from '../../../store/actions';

//import components
import rowData from '../../components/rowData.js';

class HomePage extends Component {
    constructor(props) {
        super(props)
        state = {
            todo: '',
            time: ''
        }
    }

    handleInput = (todoName) => {
        this.setState({
            todo: todoName
        })
    }

    submitTodo = () => {

        this.props.addTodos(this.state);

    }

    render() {
        return (
            <View
                style={styles.container}>
                <Text
                    style={styles.titleText}
                >
                Good Day Hash
                </Text>
                <Text
                    style={styles.subtitleText}
                >
                Paln your day here,
                </Text>
                <TextInput
                    placeholder='Enter your todo'
                    style={styles.todoInput}
                    onChangeText={this.handleInput}
                />
                <TouchableOpacity
                    title='Add Todo'
                    onPress={this.submitTodo}
                    style={styles.button}
                >
                    <Text
                        style={styles.buttonText}
                    >Add Todo</Text>
                </TouchableOpacity>

                <Text>sshh</Text>
            <rowData/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleText:{
        fontSize:40,
        color:'#8e24aa',
    },
    subtitleText:{
        fontSize:25,
        color:'#8e24aa'
    },
    todoInput: {
        width: '100%',
        fontSize: 20,
        padding: 5,
        borderWidth: 0.5,
        marginTop:10,
        borderColor: '#8e24aa',
    },
    button: {
        width: '100%',
        marginTop: 10,
        backgroundColor: '#8e24aa',
        borderColor: '#8e24aa',


        alignItems: 'center'
    },
    container: {
        flex: 1,
        //alignItems: 'center',
        marginTop:80,
        margin: 20,
    },
    buttonText: {
        fontSize: 20,
        margin: 5,
        color:'#fff'

    }
})

function mapStateToProps(state) {
    console.log(state);
    return {
        Todo:state.Todo
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addTodos}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps) (HomePage);