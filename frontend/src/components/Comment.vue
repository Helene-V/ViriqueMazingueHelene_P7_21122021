<template>
    <ul>
        <comment
        v-for="comment in comments"
        :key="comment.id"
        :username="comment.username"
        :comment="comment.comment"
        >
        </comment>
    </ul>   
</template>

<script>
    export default {
        props: {
            username: {
                type: String,
                require: true,
            }, 
            comment: {
                type: String,
                require: true,
            },
        },
        data() {
            return {

            }
        }
    }
</script>