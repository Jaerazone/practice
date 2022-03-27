Vue.component ('memo-component', {
    props : ['id'],
    template : 
    `<div>
        <h3>
            <slot name="title"></slot>
            <button v-on:click="deleteMemo">X</button>
        </h3>
        <slot name="memo"></slot>
        <hr>
        <p>{{formatTime}} </p>
    </div>`,
    
    data : function () {
        return {
            time : new Date()
        }
    },
    methods : {
        deleteMemo : function() {
            this.$emit('delete', this.id)
        }
    },
    computed : {
        formatTime : function() {
            return this.time.getFullYear()+'년 '
            +(this.time.getMonth()+1)+'월 '
            +this.time.getDate()+'일 '
            +this.time.getHours()+'시 '
            +this.time.getMinutes()+`분 `
            +this.time.getSeconds()+`초`
        }
        
    } 

})