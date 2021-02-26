<template>
<form @submit="handleSubmit">
<label>Email :</label>
<input type="email" required v-model="email">

<label>Password</label>
<input type="password" required v-model="password">
<div v-if="passwordError" class="error">{{passwordError}}</div>

<label>Role</label>
<select v-model="role">
    <option value="developer">Web Developer</option>
    <option value="designer">Web Designer</option>

</select>
<div class="terms">
<input type="checkbox" v-model="terms" required>
<label>Accept terms and codition</label>
</div>

<div><input type="checkbox" v-model="names" value="Shaun">
    <label>Shaun</label>
</div>
<label>Skills:</label>
<input type="text" v-model="tempSkill" @keyup.alt="addSkill">
<div v-for="skill in skills" :key="skill" class="pill">
   <span @click="deleteSkill(skill)"></span> {{skill}}
</div>

<div><input type="checkbox" v-model="names" value="yashi">
    <label>Yashi</label>
</div>

<div><input type="checkbox" v-model="names" value="mario">
    <label>mario</label>
</div>

<div class="submit">
    <button>create an account</button>
</div>
</form>

</template>

<script>
export default{
data(){
    return{
        email:'',
        Password:'',
        Role:'designer',
        terms:false,
        names:[],
        tempSkill:'',
        skills:[],
        passwordError:''
    }
},
methods: {
    addSkill(e)
    {
        if(e.key===',' && this.tempSkill)
        {
            if(!this.skills.includes(this.tempSkill))
            {
             this.skills.push(this.tempSkill);
            }
        
         this.tempSkill='';
        }

    },

    deleteSkill(skill){
        this.skill=this.skills.filter((item)=>{
    return skill!==item
        })
    },
    handleSubmit(){
        //
        this.passwordError=this.password.length>5? '':'length is small';
        if(!this.passwordError)
        {
             
        }
     
    }
}
}
</script>

<style>
form{
    max-width:420px;
    margin:30px,auto;
    background: white;
    text-align:left;
    padding:40px;
    border-radius:10px;
}    
    label{
        color:#aaa;
        display: inline-block;
        margin: 25px 0 15px;
        background:white;
        font-weight:bold;
        letter-spacing:bold;
        letter-spacing:1px;
}
input select{
    display:block;
    padding:10px 6px;
    width:100%;
    border:none;
    border-bottom:1px solid #ddd;
    color:#bbb;
}
input[type="checkbox"]
{
    display:inline-block;
    width:16px;
    margin:0 10px 0 0;
    position:relative;
    top:2px;
}
.error{
    color:red;
    margin-top:10px;
    font-size:0.8em;
    font-weight: bold;
}
</style>
