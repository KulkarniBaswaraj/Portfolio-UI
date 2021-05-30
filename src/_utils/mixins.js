import { msgs, icons } from "./alerts.js"
export default {
   data() {
      return {

      }
   },
   methods: {
      success(msg, custom) {
         const message = msg == null ? custom : msgs[msg]
         this.swalToast('success', message);
      },
      fail(msg, custom) {
         const message = msg == null ? custom : msgs[msg]
         this.swalToast('warning', message);
      },
      swalToast(icon, title) {
         const Toast = this.$swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: (toast) => {
               toast.addEventListener('mouseenter', this.$swal.stopTimer)
               toast.addEventListener('mouseleave', this.$swal.resumeTimer)
            }
         })
         Toast.fire({
            icon: icon,
            title: title
         })
      },
      swalConfirm(info) {
         return this.$swal.fire({
            title: info.title,
            text: info.text,
            position: 'center',
            icon: 'question',
            customClass: 'swal-confirm',
            showCancelButton: true,
            confirmButtonColor: '#083b66',
            cancelButtonColor: '#9E9E9E',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
         }).then((result) => result).catch(err => err);
      },
      rmRef(obj) {
         return JSON.parse(JSON.stringify(obj));
      },
      getTotalExp() {
         const joiningDay = new Date(2015, 6, 1);
         const today = new Date();
   
         let resultMonth = 0; 
         let resultYear = 0
   
         if(today.getMonth() < joiningDay.getMonth()) {
           const borrowMonths = today.getMonth() + 12;
           resultMonth = borrowMonths - joiningDay.getMonth(); 
           const reduce1year   = today.getFullYear() - 1;
           resultYear = reduce1year - joiningDay.getFullYear()
         } else {
           resultMonth = today.getMonth() - joiningDay.getMonth();
           resultYear = today.getFullYear() - joiningDay.getFullYear();
         }
         return `${resultYear}${resultMonth > 0 ? '.'+resultMonth : ''}`; 
       }
   }
}