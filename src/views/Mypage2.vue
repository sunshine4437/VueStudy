<template>
    <div>
        <!--top-->
        <div class="top">마이페이지</div>
        <!--left-->
        <div class="left">
          <div id="sList">나의쇼핑내역</div>
          <div id="sCheck">
             <li>주문/배송 조회</li>
             <li>취소/환불 조회</li>
          </div>
          <div id="pList">회원정보 열람</div>
          <div id="pCheck">
             <li>회원정보 수정</li>
          </div>
          <input type="button"  id="logout" value="로그아웃" />
        </div>
        <!--right-->
   
        <div id="pList1">회원 정보 열람</div>      
           <div class="right">
            <h3>
            <label>닉네임</label>
            </h3>
            <input type="text" id="mdtext"> &nbsp;
            <button type="button"  id="mdbtn"> 수정하기 </button>
 
          <h3>
            <label>비밀번호</label>
            </h3>
           <input type="text" id="mdtext"> &nbsp;
            <button type="button"  id="mdbtn"> 수정하기 </button>
          <br>

            <h3>
            <label>연락처</label>
            </h3>
            <input type="text" id="mdtext"> &nbsp;
            <button type="button" id="mdbtn"> 수정하기 </button>
        
            <h3>
            <label>주소</label>
            </h3>
            <input type="text" id="mdtext"> &nbsp;
            <button type="button" id="mdbtn"> 주소조회 </button>

            <h3>
            <label>상세주소</label>
            </h3>
            <input type="text" id="mdtext"> &nbsp;
            <button type="button"  id="mdbtn"> 수정하기 </button>
           <br>
          <input type="button"  id="quit" value="회원탈퇴" />
        
        </div>
        
    

    </div>
</template>


<script>
export default {
	methods: {

    }
    
}
</script>

<style scoped>
    
</style>


